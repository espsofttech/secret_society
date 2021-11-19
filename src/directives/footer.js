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
                <div className="col-lg-4 col-12 mtc">
                  <div className="nav-bold-style text-uppercase">
                    <ul>
                      <li><a className="nav-link py-1 pb-sm-0 yellow" href="terms_and_conditions.html">Terms &amp; Conditions</a></li>
                      <li><Link className="nav-link py-1 pb-sm-0 yellow" to={`${config.baseUrl}provenance`}> Provenance</Link></li>
                   
                    </ul>
                   
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="footer-logo">
                    <img src="assets/img/content/logo-nft.png" />
                  </div>
                </div>
                <div className="col-lg-4 text-right mtc">
                  <div className="social-buttons lead-1">
                    <ul>
                      <li>
                        <p className="nav-link py-1 pb-sm-0  mb-0" href="#">VERIFIED SMART CONTRACT ADDRESS:</p>
                      </li>
                      <li>
                        <div className="nav-link py-1 pb-sm-0 ">
                          <div className="wordbreak yellow">0xBC4CA0EdA7647A8aB7C2061c2Eh37hkjdl</div>
                        </div>
                      </li>
                    </ul>
                    <a className="social-facebook" href="#"><img src="assets/img/Discord-Logo.png" width="25px" style={{"filter":"brightness(0) invert(1)","object-fit":"contain","margin-top" : "-3px"}} /></a>
                    <a className="social-twitter" href="#"><i className="fab fa-twitter" /></a>
                    <a className="social-instagram" href="#"><i className="fab fa-instagram" /></a>
                    <a className="social-dribbble" href="#"><i className="fab fa-opensea"><img src="assets/img/ship.png" style={{width: '21px', marginTop: '-3px'}} /></i></a>
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
