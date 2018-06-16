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
    function CampaignHashStore(uint _price) public {
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
        OwnershipTransferred(manager, _newManager);
    }

    /**
     * Withdraw contract accumulated Eth balance
     */
    function withdrawBalance() restricted public {
        uint amount = this.balance;

        // transfer balance
        manager.transfer(this.balance);

        // Log event
        Withdrawn(manager, amount);
    }

    /**
     * save new hash
     * @param {string} _hashContent Hash Content
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
        NewHashStored(hashes[hashId].sender, hashId, hashes[hashId].content, hashes[hashId].timestamp);
    }

    /**
    * find hash by id
    * @param {uint} _hashId Hash Id
    * @returns {address, string, uint} hashSender, hashContent, hashTimestamp
    */
    function find(uint _hashId) constant public returns (address hashSender, string hashContent, uint hashTimestamp) {
        return (hashes[_hashId].sender, hashes[_hashId].content, hashes[_hashId].timestamp);
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approval;
    }

    Request[] public requests;
    
}
