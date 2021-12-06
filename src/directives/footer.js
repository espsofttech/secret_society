import React, { Component } from 'react';
import config from '../config/config'
import { Link } from 'react-router-dom';


const Footer = (props) => {


  return (

       <>
                <footer className="footer mobile-footer footer-dark py-0">
          <div className="bg-chocalate  py-5">
            <div className="container">
              <div className="row gutters-y align-items-center">
                <div className="col-lg-5 col-12 mtc">
                  <div className="nav-bold-style text-uppercase">
                    <ul>
                      <li> <Link className="nav-link py-1 pb-sm-0 yellow" target="_blank" to={`${config.baseUrl}Term_condition`}>Terms & Conditions</Link></li>
                      <li><Link className="nav-link py-1 pb-sm-0 yellow market_link"  to={`${config.baseUrl}`}> Provenance</Link></li>
                   
                    </ul>
                   
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="footer-logo">
                    <img src="assets/img/content/logo-nft.png" />
                  </div>
                </div>
                <div className="col-lg-5 text-right mtc">
                  <div className="social-buttons lead-1">
                    <ul>
                      <li>
                        <a className="nav-link py-1 pb-sm-0  mb-0" href="#">VERIFIED SMART CONTRACT ADDRESS:</a>
                      </li>
                      <li>
                        <div className="nav-link py-1 pb-sm-0 ">
                          <a href="https://ropsten.etherscan.io/address/0xca3dc0febbd14ce5df8361e8fc1ab9cc6deb6971#code" className="wordbreak yellow">0xBC4CA0EdA7647A8aB7C2061c2Eh37hkjdl</a>
                        </div>
                      </li>
                    </ul>
                    <a className="social-facebook" target="_blank" href="https://discord.com/invite/oddfellowsnft"><img src="assets/img/Discord-Logo.png" width="25px" style={{"filter":"brightness(0) invert(1)","object-fit":"contain"}} /></a>
                          <a className="social-twitter" target="_blank" href="https://twitter.com/oddfellowsnft"><i className="fab fa-twitter" /></a>
                          <a className="social-instagram" target="_blank" href="https://www.instagram.com/oddfellowsnft/"><i className="fab fa-instagram" /></a>
                          <a className="social-dribbble" target="_blank" href="https://opensea.io/OddFellowsNFT"><i className="fab fa-opensea"><img src="assets/img/ship.png" style={{width: '21px', marginTop: '-3px'}} /></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-end py-6 text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <span className="ls-1 fw-500">Copyright © 2021 Secret Society. All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
</>
        );
    }

    export default Footer;   
