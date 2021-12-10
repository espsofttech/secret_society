// import React, { Component } from 'react';


import React, { useEffect, useState } from 'react';
import Header from '../directives/header';
import Footer from '../directives/footer';
import config from '../config/config';
import { NavLink, useHistory } from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';


function Home() {
  const [purchased_quantity, setpurchased_quantity] = useState('1')
  const [errorAvailable, seterrorAvailable] = useState('')
  const [form, setForm] = useState({ purchased_quantity: "" })

  //   useEffect(async () => {

  // }, [])
  const getTimeOfStartDate = (dateTime) => {

    // var date = new Date(dateTime); // some mock date
    // var milliseconds = date.getTime();
    var countDownDate = Date.parse(dateTime);

    return countDownDate;
  }

  const CountdownTimer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Starting";
    } else {
      // Render a countdowns


      return (
        <>
          <li><span id="days" >{days || 0}</span>Days</li>
          <li><span id="hours" >{zeroPad(hours)}</span>Hours</li>
          <li><span id="minutes" >{zeroPad(minutes)}</span>Minutes</li>
          <li><span id="seconds" >{zeroPad(seconds)}</span>Seconds</li>
        </>
        // <span>{dayPrint} {zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s</span>
      );
    }
  };


  const minusQuantity = () => {
    var qty = parseInt(purchased_quantity) - parseInt(1)
    if (purchased_quantity > 1) {
       setpurchased_quantity(qty)
       // this.setState({
       //    'purchased_quantity': qty
       // })
    }

    // if (qty > responsedata.available_quantity) {
    //    seterrorAvailable(1)


    // }
    else if (qty === '0' || qty === '') {
       seterrorAvailable(2)
    }
    else {
       seterrorAvailable(0)
    }
 }


 const plusQuantity = () => {
    var qty = parseInt(purchased_quantity) + parseInt(1)
    setpurchased_quantity(qty)

    // if (qty > responsedata.available_quantity) {
    //    seterrorAvailable('1')
    // }
    if (qty === '0' || qty === '') {
       seterrorAvailable('2')
    }
    else {
       seterrorAvailable('0')
    }

 }

 const handleChange = async (e) => {
  const { name, value } = e.target
  setForm((old) => {
     return { ...old, [name]: value }
  })

  if (e.target.name === 'purchased_quantity') {

    //  if (e.target.value > responsedata.available_quantity) {
    //     seterrorAvailable('1')


    //  }
     if (e.target.value === '0' || e.target.value === '') {
        seterrorAvailable('2')

     }
    //  else {
    //     seterrorAvailable('0')
    //  }
  }
}

  return (

    <>

      <Header />
      <header id="header" className="header h-fullscreen  text-light">
        <div className="media-container parallax-window" data-overlay={7} data-parallax="scroll" data-image-src />
        <div className="overlay pe-n bg-dark_A-20" />
        <div className="overlay d-flex align-items-center">
          <div className="container text-center mt-8 pt-5">
            <div className="row align-items-center">
              <div className="col-lg-12 mx-auto banner">
                <div>
                  <h4>MINT JANUARY 15th, 5:00pm EST</h4>
                  <div id="countdown" className="col-sm-5 col-9 ml-auto mr-auto">
                    <ul>
                      {/* <li><span id="days" />days</li>
                      <li><span id="hours" />Hours</li>
                      <li><span id="minutes" />Minutes</li>
                      <li><span id="seconds" />Seconds</li> */}
                      {/* <li><span id="days" /><Countdown date={Date.now() + 10000} /></li> */}
                      <Countdown
                        date={getTimeOfStartDate('2022-01-15T17:00:00')}
                        renderer={CountdownTimer}
                      />
                    </ul>
                  </div>
                  <div className="row">
                      <div className="col-md-5 col-3">
                        </div>

                      <div className="col-md-2 col-6">
                        {/* <div className="input-group mint-box d-flex mt-1">
                            <span className="input-group-btn" >
                              <button type="button" onClick={e => minusQuantity(e)} className="btn btn-sm btn-border text-white btn-number" data-type="minus" data-field="quant[2]">
                                  <span className="fa fa-minus"></span>
                              </button>
                            </span>
                            <input type="text"  onKeyPress={(event) => {
                              if (!/^\d*[]?\d{0,1}$/.test(event.key)) {
                                  event.preventDefault();
                              }
                            }} className="form-control border-form" name="purchased_quantity" placeholder="Quantity" value={purchased_quantity}
                              onChange={e => handleChange(e)} style={{ fontSize: '12px', height: '37px',color:'#fff',background:'transparent' ,fontWeight: '600',textAlign: 'center'}} />

                            <span className="input-group-btn">
                              <button type="button" onClick={e => plusQuantity(e)} className="btn btn-sm btn-border text-white btn-number" data-type="plus" data-field="quant[2]">
                                  <span className="fa fa-plus"></span>
                              </button>
                            </span>
                        </div> */}
                        <div className="ml-auto me-auto mt-5">
                          {/* <button className="btn text-white btn-border">Mint</button> */}

                        </div>
                      </div>
                      <div className="col-md-5 col-3">
                        </div>
                  </div>
                  <h2>
                    A limited NFT collection where the token itself doubles as your membership into the Secret Society of Odd Fellows.<br />
                    <div className="highlight">Featuring the Legendary Collection X Oschino</div>
                  </h2>
                  {/* <img src="assets/img/content/game-logo.png" alt="Game Logo"> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fadeIn ad-800ms">
          <div className="down-arrow floating-arrow absolute-center-X">
            <span className="fas fa-chevron-down" />
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="partner-logo text-center">
          <div className="mobile-hide logo-1">From the Co-Founder of &nbsp;<img src="assets/img/same-day-pros-home-services-logo.svg" />&nbsp; in collaboration with <img src="assets/img/penthouse-club-baltimore-logo.png" />&nbsp; &amp; former <img src="assets/img/rocafella.png" /> and <img src="assets/img/billboard.png" />&nbsp; #1 rapper, writer, and producer.</div>
          <div className=" mobile-logo logo-1">From the Co-Founder of <br />
            <img src="assets/img/same-day-pros-home-services-logo.svg" /><br />
            in collaboration with<br /> <img src="assets/img/penthouse-club-baltimore-logo.png" /><br />
            &amp; former #1 rapper, writer, and producer.<br /> <img src="assets/img/rocafella.png" />  <img src="assets/img/billboard.png" /></div>
          {/* <div class="logo-1">
               Same Day Pros Home Service &nbsp;
                 <img src="assets/img/same-day-pros-home-services-logo.svg">
               </div>
               <div class="logo-1">
               Penthouse Club Baltimore &nbsp;
                 <img src="assets/img/penthouse-club-baltimore-logo.png">
               </div>
               <div class="logo-1">
               Roc-Fella Records &nbsp;
                 <img src="assets/img/rocafella.png">
               </div>
               <div class="logo-1">
               Billboard Music &nbsp;
                 <img src="assets/img/billboard.png">
               </div> */}
        </div>
        {/* Start Content Area */}
        <section id="about" className="content-section position-relative text-light text-center parallax-window" data-parallax="scroll" data-image-src="assets/img/1.webp" data-overlay={7}>
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-8 mx-auto text-left">
                <div>
                  <h2 className="ls-1 italicfont">WELCOME TO THE<br />SECRET SOCIETY OF ODD FELLOWS</h2>
                  {/* <hr class="w-10 border-warning border-top-2 o-90"> */}
                  <p className="lead-1">Secret Society of Odd Fellows is a collection of 10,011 Odd Fellows NFTs—unique digital collectibles, secretly living on the Ethereum blockchain. Your Odd Fellow doubles as your Secret Society membership card, and grants you access to members-only benefits. The first of which is real world utility; VIP Access, Table Service and Bottle Service including a FREE Bottle of Liquor at the Penthouse Gentlemen’s Club Baltimore for you and 4 of your closest friends (must be 21 and older to enter club and must hold Odd Fellow in your MetaMask Wallet). Future exclusive benefits can be unlocked by the community through roadmap activation, which will include all kinds of other dope shit. 100% of the Royalties from sales on OpenSea will go into the community wallet, because it ain’t no fun, if the homies can’t have none. Yep, you heard it right. 100% of the royalties will go back to our community.</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mx-auto mb-7 md-lg-0">
                <div className="common-container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6"><img className="img-fluid" src="assets/img/Odd-Fellows.png" aria-label="ape4" /></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6"><img className="img-fluid" src="assets/img/Odd-Fellows3.png" alt="ape2" aria-label="ape2" /></div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6"><img className="img-fluid" src="assets/img/Odd-Fellows2.png" alt="ape3" aria-label="ape3" /></div>
                 
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6"><img className="img-fluid" src="assets/img/Odd-Fellows4.png" alt="ape1" aria-label="ape1" /></div>
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5 pt-5 col-lg-12 pl-0 pr-0">
                <div className="col">
                  <div id="buy-an-ape" className="buy-token-container">
                    <a href="https://discord.com/invite/oddfellowsnft" target="_blank" className="discord_btn">
                      <img src="assets/img/discord_btn.png" className="btn_discord"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.End Content Area */}
        {/* Start Content Area */}
        <section id="characters" className="characters content-section latest-articles text-light" data-parallax="scroll" data-image-src="assets/img/1.webp" data-overlay={7}>
          <div className="container">
            <header className="section-header text-center">
              <h2 className="italicfont" style={{ position: 'relative'  }}>FEATURING THE <br />LEGENDARY COLLECTION X OSCHINO</h2>
              <hr className="w-10 border-warning border-top-2 o-90" />
            </header>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mx-auto mb-7 md-lg-0">
                <p className="lead-1" >Oschino Vasquez is a popular rapper who has written and produced multiple songs, mixtapes and studio albums. He has worked with some of the greatest rap artists of all time including Jay-Z and Kayne West. Oschino has enjoyed a successful rapping and acting career through his affiliation with State Property in the early 2000s when he was signed to Roc-a-Fella Records along with Beanie Sigel, Freeway, Peedi Crakk, Omillio Sparks, and the duo Young Gunz (Young Chris and Neef Buck). State Property OST topped the Billboard R&amp;B/Hip Hop Album Chart in 2002 and The Chain Gang Vol. 2 topped the Billboard R&amp;B/Hip Hop Album Chart in 2003. That’s right, both albums hit #1. In 2002 their first album ended Nas’ reign of Stillmatic and in 2003 they ended the Soundtrack of Bad Boys II’s reign. He is arguably one of the greatest artists with a mic and a paint brush. </p>
              </div>
            </div>
            <div className="oschino ">
              <div className="row">
                <div className="col-sm-6 col-12 ">
                  <img src="assets/img/Oschino1.jpg" className="oschino-img" />
                </div>
                <div className="col-sm-6 col-12 ">
                  <img src="assets/img/Oschino3.jpg" className="oschino-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.End Content Area */}
        {/* Start Content Area */}
        <section id="overview" className="content-section latest-articles  position-relative text-center text-light parallax-window" data-parallax="scroll" data-image-src style={{ backgroundColor: 'rgb(32 13 15)' }}>
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-7  mb-md-0 text-left">
                <header className>
                  <h2 className="text-light italicfont">THE SPECS</h2>
                  {/* <hr class="w-10 border-warning border-top-2 o-90"> */}
                </header>
                <p className="lead-1">Each Odd Fellow is unique and programmatically generated from over 160 possible traits, including expression, headwear, clothing, and more. All Odd Fellows are dope, but some are more rare and more dope than others, including 11 legendary 1 of 1’s by the legend himself, Oschino Vasquez.</p>
                <p className="lead-1">The Odd Fellows are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) Purchasing an Odd Fellow costs 0.08 ETH.</p>
                <p className="lead-1">To access members-only areas such as the Merch Store, and future integrations, Odd Fellows will need to be signed into their MetaMask Wallet.</p>
              </div>
              <div className="col-md-4  mb-md-0">
                <img src="assets/img/stateproperty.jpg"  class="stateproperty" style={{height: '400px'}} />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="content-section club-section position-relative latest-articles text-light text-center parallax-window" data-parallax="scroll" data-image-src="assets/img/wallpaper.jpg" data-overlay={3}>
          <div className="container">
            <header className="section-header text-center">
              <h2 className="italicfont">WELCOME TO THE CLUB</h2>
              <hr className="w-10 border-warning border-top-2 o-90" />
              <p className="lead-1">When you buy an Odd Fellow, you’re not simply buying an avatar or a dope piece of art. You are gaining membership access to a secret society whose benefits and offerings will increase over time. Your Odd Fellow can serve as your digital identity, open digital doors, and open doors in the real world like never been done before with real world utility.</p>
            </header>
          </div>
        </section>
        {/* /.End Content Area */}
        {/* Start Content Area */}
        <section id="roadmap" className="content-section position-relative latest-articles text-light text-center parallax-window" data-parallax="scroll" data-image-src style={{ backgroundColor: 'rgb(32 13 15)' }}>
          <div className="container">
            <header className=" text-center mb-5">
              <h2 className="italicfont">ROADMAP ACTIVATIONS</h2>
              <hr className="w-10 border-warning border-top-2 o-90" />
              <p className="text-center">We’re in this for the long haul, as Puff Daddy once said, “We Ain’t, Going Nowhere.”</p>
              <p>Secret Society of Odd Fellows has been in the works for months. Arguably, you can say, my entire career has led us to this moment. The team has given their all to this project, pulling out all the stops. Alongside our amazing team, we also have an abundance of partnerships that we can’t wait to roll out! Our roadmap shows exactly what we’re working towards in the short term. Each milestone unlocks when a certain % of Odd Fellows have been minted. Additional future developments and partnerships will be decided and voted upon by the SSOF community.
              </p>
            </header>
            <div className="row">
              <div className="mb-3 mb-md-0 text-left mx-auto col-lg-12 col-12">
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">10%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className="text-decoration-line-through common-sub-p">Congratulations, and let me be the first to welcome you to the Secret Society of Odd Fellows. The first NFT project of its kind.</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">20%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className="text-decoration-line-through common-sub-p">The Secret Society of Odd Fellows community wallet is opened. 100% of the royalties we collect will go into the community wallet, where we, as a community, can decide on all kinds of dope shit, like donating to a charity, helping a fellow Odd Fellow, sweeping the floor, buying out epic sporting events, concert venues, yacht parties, private islands, private jets, the sky is literally the limit. Get your popcorn ready.</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">40%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className="text-decoration-line-through common-sub-p">But wait, there’s more. From the 100% of the royalties we collect that will go into the community wallet, we realize not everyone would like to pool their money together, which is cool. So we’re going to distribute 50% of the royalties from the community wallet, on the 1st of the month, among the token holders who hold an Odd Fellow. Yep, you heard it right. 100% of the royalties will go back to our community, being distributed equally between our community, and the token holders individually. The fun has only just begun.</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">60%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className="text-decoration-line-through common-sub-p">Some of the Odd Fellows NFTs will be airdropped to our early adopters and supporters. We will put a large focus on our social medias, Discord, connections, and relationships to ramp up the project and send SSOF to the moon. When the project wins, we all win and. We will continue to strategically increase the value of our token over time through meaningful, long lasting relationships.</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">80%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className=" common-sub-p">SSOF member-exclusive merch store gets unlocked, featuring limited edition tees, hoodies, and all kinds of other dope shit. To access the Merch Store, and future integrations, Odd Fellows will need to be signed into their MetaMask Wallet.</p>
                  </div>
                </div>
                {/* <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">80%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                    <p className="text-decoration-line-through common-sub-p">SSOF member-exclusive merch store gets unlocked, featuring limited edition tees, hoodies, and all kinds of other dope shit. To access the Merch Store, and future integrations, Odd Fellows will need to be signed into their MetaMask Wallet.</p>
                  </div>
                </div> */}
                <div className="mb-3 mb-lg-1 row">
                  <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                    <p className="goal">100%</p>
                  </div>
                  <div className="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">Earth shattering, game-changing, announcements will be revealed within 24 hours of sellout. The party, real world utility, and passive income making from the 100% of the royalties going back to the community has only just begun. Looking forward to this journey together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.End Content Area */}
        {/* Start Content Area */}
        <section id="team" className="content-section team-section latest-articles position-relative text-center text-light parallax-window" data-parallax="scroll" data-image-src="assets/img/team.jpg" data-overlay={7}>
          <div className="container position-relative">
            <header className="section-header">
              <h2 className="text-light italicfont">OUR TEAM</h2>
              <hr className="w-10 border-warning border-top-2 o-90" />
            </header>
            <div className="row">
              <div className="col-md-4 col-12 mb-7 mb-md-0">
                <a href="team.html">
                </a><article className="card article-post bg-dark_A-40 border border-secondary py-6 px-5"><a href="team.html">
                  <div className="position-relative overflow-hidden br-n   article-image ar-1_1 w-70 mx-auto  border border-secondary mb-3" style={{ backgroundImage: 'url(assets/img/avatar/Jeremy_Dunn.jpg)', backgroundSize: '100% 100%' }} />
                </a><figure><a href="team.html">
                </a><figcaption><a href="team.html">
                </a><h5 className="text-light mt-1 mb-0"><a href="team.html" /><a href="#" className="text-light">Jeremy Dunn</a></h5>
                      <div className="social-buttons lead-1">
                          <a className="social-facebook" target="_blank" href="https://www.facebook.com/jeremiah.m.dunn/"><i className="fab fa-facebook" /></a>
                          <a className="social-twitter" target="_blank" href="https://twitter.com/jeremiah_dunn"><i className="fab fa-twitter" /></a>
                          <a className="social-instagram" target="_blank" href="https://www.instagram.com/jeremiahdunn/"><i className="fab fa-instagram" /></a>
                          <a className="social-dribbble" target="_blank" href="  https://www.linkedin.com/in/jeremiahdunn/"><i className="fab fa-linkedin" /></a>
                      </div>
                      {/* <hr class="w-10 my-6 my-xl-7 border-warning"> */}
                      {/* <p class="lead-1">"Mauris tempus enim lorem, nec egestas est fringilla ut. Quisque iaculis dui egestas mi blandit viverra. Nulla luctus vulputate iaculis. Nulla facilisi."</p>
                              <span class="small text-warning">Marketing Ops</span> */}
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-md-4  mb-7 mb-md-0">
                <a href="team.html">
                </a><article className="card article-post bg-dark_A-40 border border-secondary py-6 px-5"><a href="team.html">
                  <div className="position-relative overflow-hidden br-n   article-image ar-1_1 w-70 mx-auto  border border-secondary mb-3" style={{ backgroundImage: 'url(assets/img/oschino_kids.jpg)', backgroundSize: '100% 100%' }} />
                </a><figure><a href="team.html">
                </a><figcaption><a href="team.html">
                </a><h5 className="text-light mt-1 mb-0"><a href="team.html" /><a href="#" className="text-light">Oschino Vasquez</a></h5>
                      <div className="social-buttons lead-1">

                        <a className="social-instagram" target="_blank" href=" https://www.instagram.com/oschinovasquez1/"><i className="fab fa-instagram" /></a>
                        <a className="social-instagram" target="_blank" href=" https://open.spotify.com/artist/59h9wM4IPZZKUcMGiMaCJn?si=IpIPkYg4T16Pav0WrrEXAg"><img src="assets/img/spotify.png" width="20px" style={{"margin-top":"-6px"}} /></a>
                        <a className="social-instagram" target="_blank" href=" https://music.apple.com/us/artist/oschino/2091128"><img src="assets/img/apple-music.png" width="20px" style={{"margin-top":"-6px"}} /></a>
                        <a className="social-dribbble" target="_blank" href="https://www.youtube.com/c/OschinoVasquez"><i className="fab fa-youtube" /></a>

                      </div>
                      {/*  <hr class="w-10 my-6 my-xl-7 border-warning">
                              <blockquote>
                                 <p class="lead-1">"Mauris tempus enim lorem, nec egestas est fringilla ut. Quisque iaculis dui egestas mi blandit viverra. Nulla luctus vulputate iaculis. Nulla facilisi."</p>
                              </blockquote>
                              <span class="small text-warning">Designer</span> */}
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-md-4">
                <a href="team.html">
                </a><article className="card article-post bg-dark_A-40 border border-secondary py-6 px-5"><a href="team.html">
                  <div className="position-relative overflow-hidden br-n  article-image ar-1_1 w-70 mx-auto  border border-secondary mb-3" style={{ backgroundImage: 'url(assets/img/avatar/team3.jpg)', backgroundSize: '100% 100%' }} />
                </a><figure><a href="team.html">
                </a><figcaption><a href="team.html">
                </a><h5 className="text-light mt-1 mb-0"><a href="team.html" /><a href="#" className="text-light">Redouane Belhadi</a></h5>
                      <div className="social-buttons lead-1">
                      <a className="social-instagram" target="_blank" href="https://music.amazon.com/artists/B09J17N2M6/redouane-belhadi"><img src="assets/img/apple-music.png" width="20px" style={{"margin-top":"-6px"}} /></a>
                      <a className="social-instagram" target="_blank" href="https://www.instagram.com/redouane_belhadi/"><i className="fab fa-instagram" /></a>
                      {/* <a className="social-twitter" target="_blank" href="https://twitter.com/red1gfx"><i className="fab fa-twitter" /></a>
                      <a className="social-dribbble" target="_blank" href="https://www.youtube.com/c/RED1GFX"><i className="fab fa-youtube" /></a> */}
                      </div>
                      {/* <hr class="w-10 my-6 my-xl-7 border-warning">
                              <blockquote>
                                 <p class="lead-1">"Mauris tempus enim lorem, nec egestas est fringilla ut. Quisque iaculis dui egestas mi blandit viverra. Nulla luctus vulputate iaculis. Nulla facilisi."</p>
                              </blockquote>
                              <span class="small text-warning">Software Engineer</span> */}
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* /.End Content Area */}
      </main>
      <Footer />
    </>
  );


}

export default Home;