pragma solidity ^0.4.17;

contract DonateCampaign {
    string public message;
        
    function DonateCampaign(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
