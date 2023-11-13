// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract TuneToken {
    
    mapping(uint256 => address) composer_addr_map;
    mapping(address => uint256) composer_percent_map;
    mapping(address => Audience) public audience_map;
    mapping(uint256 => Song) public song_map;
    uint256 public purchase_list_length;
    mapping(uint256 => Purchase) public purchase_map;
    mapping(address => bool) public chkexistAudience_map;

    enum Purchase_Status {Cancelled, Waiting, Pending, Done}

    
    struct Song {
        uint256 id;
        string name;
        uint256 price;
        uint256[] composer_addr_map;
        uint256[] composer_percent_map;
    }
    struct Audience {
        address addre;
        uint256 balance;        
        uint256[] purchase_map;
    }
    struct Purchase {
        uint256 id;
        address audi;
        string composer_addre;
        string zip;
        uint256[] products_id;
        uint256 total_price;
        Purchase_Status state;
    }


    constructor() payable {

    }


    // user
    function registerAudience(address _address) public returns (bool) {
        // not the current user -> update the status & record address
        if (_address!=address(0) && !chkexistAudience_map[_address]) {
            chkexistAudience_map[_address] = true;
            audience_map[_address].addre = _address;
            return true;
        }
        return false;
    }

    function getAudience(address _addr) public view returns (bool _isCurrCust){
        return chkexistAudience_map[_addr]; //check if registed
    }

//order info

    function getPurchase(uint256 id) public view returns (
            string memory _composer_addre,
            string memory _zip,
            uint256[] memory _products_ids,
            uint256 _total_price,
            Purchase_Status _state,
            uint256 _id
        )
    {
        Purchase memory pur = purchase_map[id];
        return (
            pur.composer_addre,
            pur.zip,
            pur.products_id,
            pur.total_price,
            pur.state,
            pur.id
        );
    }

    function getPurchaseMap() public view returns (uint256[] memory cus_orders) {
        return audience_map[msg.sender].purchase_map; // puchase list of current user
    }

    //purchase status
    function purchaseDone(uint256 id) public {
        purchase_map[id].state = Purchase_Status.Done;
    }

    function purchasePending(uint256 id) public {
        purchase_map[id].state = Purchase_Status.Pending;
    }

    function purchaseCancel(uint256 id) public {
        purchase_map[id].state = Purchase_Status.Cancelled;
        audience_map[purchase_map[id].audi].balance += purchase_map[id].total_price;
    }

    //purchase
    function checkoutList(
        string calldata _composer_addre,
        string calldata _zip,
        uint256[] memory _product_ids
    ) public payable returns (uint256 id) {
        //auto register
        if (chkexistAudience_map[msg.sender] == false) {
            registerAudience(msg.sender);
        }
        audience_map[msg.sender].balance += msg.value;

        uint256 _total_price;

        //add up total price
        for (uint256 i = 0; i < _product_ids.length; i++) {
            _total_price += song_map[_product_ids[i]].price;
        }
        //chcek total amount
        require(
            audience_map[msg.sender].balance >= _total_price,
            "Please add money"
        );

        // instance
        Purchase memory pur;
        pur.audi = msg.sender;
        pur.id = purchase_list_length;
        pur.composer_addre = _composer_addre;
        pur.zip = _zip;
        pur.products_id = _product_ids;
        pur.total_price = _total_price;
        pur.state = Purchase_Status.Waiting;

        // record the puchase in personal info
        purchase_map[purchase_list_length] = pur;
        purchase_list_length += 1;
        audience_map[msg.sender].purchase_map.push(purchase_list_length - 1);

        //deduct price
        audience_map[msg.sender].balance -= _total_price;
        
        return purchase_list_length - 1;
    }


}
