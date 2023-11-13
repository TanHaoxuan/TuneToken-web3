import React, { Component } from "react";
import Home from './pages/page1_music_player.js'
import Page2_songs from './pages/page2_songs.js'
import Error from './pages/error.js'
import Page3_wishlist from './pages/page3_wishlist.js'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/navigationbar.js";
import { useState } from 'react';
import preset_songs from './components/songs_preset.json'
import Checkout from './pages/Checkout.js'
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';
import Page4_record from "./pages/page4_record.js";
import Credits from "./pages/credits.js";
import Web3 from 'web3';
import { CONTRACT_NAME_ADDRESS, CONTRACT_NAME_ABI } from "./contracts/config.js";
import { useEffect } from "react";
import { SettingsBackupRestoreRounded } from "@mui/icons-material";


// checkout page using https://github.com/mui/material-ui/tree/

export default function App() {
    const [items, setPurchaseItems] = useState({});
    const [cart_count, setPurchaseCount] = useState(0);
    const [searchedDish, setSearchedDish] = useState(null);
    const [searchedMerchant, setSearchedMerchant] = useState(null);
    const [haveMetamask, setHaveMetamask] = useState(true);     // check if the browser has MetaMask installed. 
    const [address, setAddress] = useState(null);               // address of connected MetaMask account. 
    const [network, setNetwork] = useState(null);               // network the account is using. 
    const [balance, setBalance] = useState(0);                  // balance of connected MetaMask account. 
    const [isConnected, setIsConnected] = useState(false);      // check if is connected to MetaMask account. 
    const [pastOrders, setDonePurchase] = useState([]);           // list of past orders.
    const [currentOrders, setPendingPurchase] = useState([]);     // list of current orders.
    const [pendingOrders, setWaitingPurchase] = useState([]);     // list of pending orders.

    const { ethereum } = window;
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(CONTRACT_NAME_ABI, CONTRACT_NAME_ADDRESS);

    const pushItem = (item_name) => {
        var new_item = items;
        if (Object.keys(items).includes(item_name)) {
            new_item[item_name] += 1;
        } else {
            new_item[item_name] = 1;
        }
        setPurchaseItems(new_item);
        setPurchaseCount(cart_count + 1);
    }

    const popItem = (item_name) => {
        var new_item = items;
        if (new_item[item_name] == 1) {
            delete new_item[item_name];
            setPurchaseItems(new_item);
            setPurchaseCount(cart_count - 1);
        } else if (new_item[item_name] > 0) {
            new_item[item_name] -= 1;
            setPurchaseItems(new_item);
            setPurchaseCount(cart_count - 1);
        }
    }

    const connectWallet = async () => { 
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            if (!ethereum) {
                setHaveMetamask(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            const chainId = await ethereum.request({
                method: 'eth_chainId',
            });

            let balanceVal = await provider.getBalance(accounts[0]);
            let bal = ethers.utils.formatEther(balanceVal);

            console.log(chainId);
            if (chainId === '0x3') {
                setNetwork('Ropsten Test Network');
            }
            else {
                setNetwork('Other Test Network');
            }
            setAddress(accounts[0]);
            setBalance(bal);
            setIsConnected(true);
        }
        catch (error) {
            setIsConnected(false);
        }
    }

//backend connection
    const registerAudience = async () => {
        const is_existing_customer = await contract.methods.getAudience(address).call();
        if (!is_existing_customer) {
            const res = await contract.methods.registerAudience(address).send({ from: address });
        }
    }

    const checkoutList = async (delivery_addr, zip, item_ids, total_price) => {
        const res = await contract.methods.checkoutList(delivery_addr, zip, item_ids).send({ from: address, value: total_price });
        return res;
    }

    const updateOrderStatus = async () => {
        setWaitingPurchase([]);
        setPendingPurchase([]);
        setDonePurchase([]);

        const res = await contract.methods.getPurchaseMap().call({ from: address });
        for (var i = 0; i < res.length; i++) {
            const res1 = await contract.methods.getPurchase(res[i]).call({ from: address });
            if (res1[4] === '0') {
                setWaitingPurchase(prev => [...prev, res1]);
            }
            else if (res1[4] === '1') {
                setPendingPurchase(prev => [...prev, res1]);
            }
            else if (res1[4] === '2') {
                setDonePurchase(prev => [...prev, res1]);
            }
        }
    }

    const acceptPurchase = async (order_id) => {
        const res = await contract.methods.purchasePending(order_id).send({ from: address });
    }

    const cancelPurchase = async (order_id) => {
        const res = await contract.methods.purchaseCancel(order_id).send({ from: address });
    }

    const confirmPurchase = async (order_id) => {
        const res = await contract.methods.purchaseDone(order_id).send({ from: address });
    }

    return (
        <HashRouter>
            {/* https://beta.reactjs.org/learn/sharing-state-between-components */}
            {NavigationBar(cart_count, address, connectWallet)}
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/page2_songs" element={Page2_songs(pushItem, setSearchedDish, searchedDish)} />
                <Route path="/page3_wishlist" element={Page3_wishlist(items, cart_count, popItem, pushItem)} />
                <Route path="/page4_record" element={<Page4_record onCancel={registerAudience} updateOrderStatus={updateOrderStatus} currentOrders={currentOrders} pendingOrders={pendingOrders} pastOrders={pastOrders} acceptPurchase={acceptPurchase} cancelPurchase={cancelPurchase} confirmPurchase={confirmPurchase} />} />
                <Route path="/checkout" element={<Checkout address={address} connectWallet={connectWallet} cart_items={items} onSubmit={checkoutList} setPurchaseItems = {setPurchaseItems}/>} />
                <Route path="/credits" element={<Credits />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );

}

