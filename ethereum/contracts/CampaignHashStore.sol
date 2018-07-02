pragma solidity ^0.4.17;

contract CampaignHashStore {

    event OwnershipTransferred(address indexed _previousManager, address indexed _newManager);
    event NewHashStored(address indexed _hashSender, uint _hashId, string _hashContent, uint timestamp);
    event Withdrawn(address indexed _hashSender, uint amount);

    struct Hash {
        address creator;
        string content;
        uint timestamp;
    }

    mapping(uint => Hash) public hashes;
    address public manager;
    uint public lastHashId;
    uint public minimumPrice;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    /**
     * Contract Constructor
     * @param {uint} _price Service minimum price
     */
    constructor(uint _price) public {
        require(_price > 0);
        manager = msg.sender;
        minimumPrice = _price;
        lastHashId = 0;
    }

    /**
     * Transfer contract ownership
     * @param {address} _newManager New manager's address
     */
    function transferOwnership(address _newManager) restricted public {
        // check address not null
        require(_newManager != address(0));

        // assign new owner
        manager = _newManager;

        // Log event
        emit OwnershipTransferred(manager, _newManager);
    }

    /**
     * Withdraw contract accumulated Eth balance
     */
    function withdrawBalance() restricted public {
        address myAddress = this;
        uint amount = myAddress.balance;

        // transfer balance
        manager.transfer(myAddress.balance);

        // Log event
        emit Withdrawn(manager, amount);
    }

    /**
     * save new hash
     * @param {string} _hashContent Hash Content
     */
    function save(string _hashContent) payable public {
        // only save if service price paid
        require(msg.value >= minimumPrice);

        // create Hash
        uint hashId = ++lastHashId;
        hashes[hashId].creator = msg.sender;
        hashes[hashId].content = _hashContent;
        hashes[hashId].timestamp = block.timestamp;

        // Log event
        emit NewHashStored(hashes[hashId].creator, hashId, hashes[hashId].content, hashes[hashId].timestamp);
    }

    /**
    * find hash by id
    * @param {uint} _hashId Hash Id
    * @returns {address, string, uint} hashCreator, hashContent, hashTimestamp
    */
    function find(uint _hashId) view public returns (address hashCreator, string hashContent, uint hashTimestamp) {
        return (hashes[_hashId].creator, hashes[_hashId].content, hashes[_hashId].timestamp);
    }
}


contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint maximum, uint minimum) public {
        address newCampaign = new Campaign(maximum, minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    uint public targetAmount;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint maximum, uint minimum, address creator) public {
        targetAmount = maximum;
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, uint, address
    ) {
        address myAddress = this;
        return (
            targetAmount,
            minimumContribution,
            myAddress.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}