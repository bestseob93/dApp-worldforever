pragma solidity ^0.4.17;

contract CampaignHashStore {
    struct Hash {
        address creator;
        string content;
        uint timestamp;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    string public title;
    string public 
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    string public message;

    function DonateCampaign(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
