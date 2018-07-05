pragma solidity ^0.4.17;

contract HashStore {
  /*
  *  Events
  */
  event OwnershipTransferred(address indexed _previousOwner, address indexed _newOwner);
  event NewHashStored(address indexed _hashSender, uint _hashId, string _hashContent, uint timestamp);
  event Withdrawn(address indexed _hashSender, uint amount);

  /*
  * Storage
  */

  struct Hash {
    // sender address
    address sender;
    // hash text
    string content;
    // creation timestamp
    uint timestamp;
  }

  // Hashes mapping
  mapping(uint => Hash) public hashes;
  // Contract owner
  address public owner;
  // Last stored Hash Id
  uint public lastHashId;
  // Service price in Wei
  uint public price;

  /*
  * Modifiers
  */

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /*
  * Public functions
  */

  /**
  * @dev Contract constructor
  * @param _price Service price
  */
  constructor(uint _price) public {
    // check price valid
    require(_price > 0);

    // assign owner
    owner = msg.sender;
    // assign price
    price = _price;
    // init ids
    lastHashId = 0;
  }

  /**
  * @dev Transfer contract ownership
  * @param _newOwner New owner address
  */
  function transferOwnership(address _newOwner) onlyOwner public {
    // check address not null
    require(_newOwner != address(0));

    // assign new owner
    owner = _newOwner;

    // Log event
    emit OwnershipTransferred(owner, _newOwner);
  }

  /**
  * @dev Withdraw contract accumulated Eth balance
  */
  function withdrawBalance() onlyOwner public {
    address myAddress = this;
    uint amount = myAddress.balance;

    // transfer balance
    owner.transfer(amount);

    // Log event
    emit Withdrawn(owner, amount);
  }

  /**
  * @dev save new hash
  * @param _hashContent Hash Content
  */
  function save(string _hashContent) payable public {
    // only save if service price paid
    require(msg.value >= price);

    // create Hash
    uint hashId = ++lastHashId;
    hashes[hashId].sender = msg.sender;
    hashes[hashId].content = _hashContent;
    hashes[hashId].timestamp = block.timestamp;

    // Log event
    emit NewHashStored(hashes[hashId].sender, hashId, hashes[hashId].content, hashes[hashId].timestamp);
  }

  /**
  * @dev find hash by id
  * @param _hashId Hash Id
  */
  function find(uint _hashId) view public returns (address hashSender, string hashContent, uint hashTimestamp) {
    return (hashes[_hashId].sender, hashes[_hashId].content, hashes[_hashId].timestamp);
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