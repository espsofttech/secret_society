
import React, { useEffect, useState } from 'react';
import config from '../config/config'
import { NavLink } from 'react-router-dom';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import toast, { Toaster } from 'react-hot-toast';

const Header = (props) => {
  
  const fm = new Fortmatic('pk_test_644846FACB88893F',"ropsten");
  const web3 = new Web3(fm.getProvider());
  
  const [connectWalletAddress,setConnectWalletAddress] = useState('');


  const connectMetaMask = async() => {
    // if (window.ethereum) {
    //    await window.ethereum.send('eth_requestAccounts');
    //    window.web3 = new Web3(window.ethereum);
    //    console.log('Rajat',window.web3)
    //    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //    console.log('asdff',accounts)
    //    setConnectWalletAddress(accounts[0])

    // }
    // else {
    //    toast.error(`Please install MetaMask to use this dApp!`, {
         
    //    });
    // }
 }


 useEffect(() => {
  setTimeout(() => {
    if (window.ethereum) {
      const { ethereum } = window;
        if (ethereum.selectedAddress) {
            var web3 = new Web3(window.ethereum);
            var currentNetwork = web3.currentProvider.chainId;
            // if (currentNetwork != '56' && currentNetwork != '0x61') {
            //     Cookies.set('loginSuccessMetaseer', "");
            //     return;
            // }
            setConnectWalletAddress(ethereum.selectedAddress)
        }
    }
}, 1000);
}, [])


       return (

            <>
          
          <div className="header-fixed fixed-top box-shadow border-nav bg-chocalate">
        <div className="container">
        <Toaster
                position="top-right"
                reverseOrder={false}
            />
          <div className="row">
            <div className="col-lg-2 col-4 col-sm-3 col-md-2 mr-auto">
              <a className="navbar-brand logo" href={`${config.baseUrl}`}>
                <img src="assets/img/content/logo-nft.png" alt="Wicodus" className="logo-light mx-auto" />
              </a>
            </div>
            <div className="col-8 col-sm-9 col-md-10 col-lg-10   text-right">
              <nav className="navbar navbar-expand-lg  ">
                <div className="row mt-5">
                  <button className="navbar-toggler navbar-toggler-fixed mt-5" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">☰</button>
                  <div className="collapse navbar-collapse" id="collapsingNavbar">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#">BUY AN ODD FELLOW </a>
                      </li>&nbsp;
                      <li className="nav-item">
                        <a className="nav-link" href="#roadmap">ROADMAP </a>
                      </li>&nbsp;
                      <li className="nav-item">
                        <NavLink className="nav-link" to={`${config.baseUrl}Team`}>TEAM </NavLink>
                      </li>&nbsp;
                      <li className="nav-item">
                      <NavLink className="nav-link" to={`${config.baseUrl}Marketplace`}>GALLERY </NavLink>
                      </li>&nbsp;
                      <li className="nav-item">
                        <a className="nav-link" href="#">MEMBERS </a>
                      </li>
                      {/* <li class="nav-item">
                                 <a class="nav-link" href="#">Team</a>
                                 </li> */}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <li>
                        <div className="social-buttons lead-1">
                          <a className="social-facebook" href="#"><i className="fab fa-discord" /></a>
                          <a className="social-twitter" href="#"><i className="fab fa-twitter" /></a>
                          <a className="social-instagram" href="#"><i className="fab fa-instagram" /></a>
                          <a className="social-dribbble" href="#"><i className="fab fa-opensea"><img src="assets/img/ship.png" style={{width: '21px', marginTop: '-3px'}} /></i></a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link btn-border" onClick={e => connectMetaMask(e)}>
                        {connectWalletAddress?
                          connectWalletAddress.toString().substring(0, 5) + '...' + connectWalletAddress.toString().substr(connectWalletAddress.length - 5)
                          :'Connect Wallet'}
                        </a>
                         
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
 </>
      );
    }

    export default Header;   