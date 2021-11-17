import React, { Component } from 'react';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Team = (props) => {


  return (

    <>
      <Header />
      <main className="main-content">

        <section id className="characters content-section mt-5 latest-articles text-light">
          <section className="banner_section">
            <div className="container text-center">
              <h2>Team</h2>
            </div>
          </section>
          <br />
          <div className="content-section text-light pt-0">
            <div className="container">
              <div className="row gutters-y">
                <div className="col-12">
                  <header>
                    <div className="row">
                      <div className="col-sm-6">
                      </div>
                      <div className="col-sm-6">
                      </div>
                    </div>
                  </header>
                </div>
                <div className="col-sm-12 text-center">
                  <div className="profile">
                    <div>
                      <h3 className="product_name mb-0">Oschino Vasquez</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className>

                        <div className="carousel-product">
                          <div className="slider text-secondary" data-slick="product-body">
                            <img src="assets/img/oschino-painting.jpg" alt="Game" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">

                  <div className="col-sm-12">
                    <div className=" readmore_content">
                      <p>Oschino Vasquez is a popular rapper who has written and produced multiple songs, mixtapes and studio albums. He has worked with some of the greatest rap artists of all time including Jay-Z and Kayne West. Oschino has enjoyed a successful rapping and acting career through his affiliation with State Property in the early 2000s when he was signed to Roc-a-Fella Records along with Beanie Sigel, Freeway, Peedi Crakk, Omillio Sparks, and the duo Young Gunz (Young Chris and Neef Buck). State Property OST topped the Billboard R&amp;B/Hip Hop Album Chart in 2002 and The Chain Gang Vol. 2 topped the Billboard R&amp;B/Hip Hop Album Chart in 2003. That’s right, both albums hit #1. In 2002 their first album ended Nas’ reign of Stillmatic and in 2003 they ended the Soundtrack of Bad Boys II’s reign. He is arguably one of the greatest artists with a mic and a paint brush.</p>
                    </div>

                  </div>
                </div>
                <div className="col-lg-12 pt-0">
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <iframe width="100%" height={345} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                      </iframe>
                    </div>
                    <div className="col-sm-6">
                      <iframe width="100%" height={345} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>



      <Footer />
    </>
  )
}

export default Team;