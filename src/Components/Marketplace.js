import React, { useEffect } from 'react';
import Header from '../directives/header';
import Footer from '../directives/footer';

function Marketplace() {

  useEffect(() => {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, [])

  return (

    <>
      <Header />
      <div className="main-content">

        <section id="characters" className="characters content-section mt-5 latest-articles text-light">
          <br />
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 mx-auto mb-7 md-lg-0">
                <div className="filter">
                  <button className="accordion ">Background</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Clothes</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Earning</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Eyes</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Fur</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Hat</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                  <button className="accordion mt-2">Mouth</button>
                  <div className="panel">
                    <ul>
                      <li>AQUAMARINE</li>
                      <li>BLUE</li>
                      <li>GRAY</li>
                      <li>NEW PUNK BLUE</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-lg-9 mx-auto mb-7 md-lg-0">
                <div className="marketplace">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/1.jpg" />
                        <h4>Art</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/2.jpg" />
                        <h4>NFT</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/3.jpg" />
                        <h4>MUSIC</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/1.jpg" />
                        <h4>Art</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/2.jpg" />
                        <h4>NFT</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/3.jpg" />
                        <h4>MUSIC</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/1.jpg" />
                        <h4>ART</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/2.jpg" />
                        <h4>NFT</h4>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box-market">
                        <img src="assets/img/3.jpg" />
                        <h4>MUSIC</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />

    </>
  );
}

export default Marketplace;