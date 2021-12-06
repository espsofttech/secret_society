import React, { useEffect } from 'react';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Term_condition= ()=> {

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
       <section id="characters" className="characters content-section mt-5 latest-articles text-light">
        <br />
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mx-auto mb-7 md-lg-0">
              <div>
                <h2 className="ls-1">Terms &amp; Conditions</h2>
                {/* <hr class="w-10 border-warning border-top-2 o-90"> */}
                <p className="lead-1">Secret Society of Odd Fellows is a collection of digital artworks (NFTs) running on the Ethereum network. This website is only an interface allowing participants to exchange digital collectibles. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by this website before approval. Furthermore, as the Secret Society of Odd Fellows smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions.</p>
                <p>This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for any and all transactions involving Secret Society of Odd Fellows digital collectibles.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mx-auto mb-7 md-lg-0">
              <div>
                <h2 className="ls-1">Ownership</h2>
                {/* <hr class="w-10 border-warning border-top-2 o-90"> */}
                <p>i. You Own the NFT. Each Odd Fellow is an NFT on the Ethereum blockchain. When you purchase an NFT, you own the underlying Odd Fellow, the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any Odd Fellow.</p>
                <p>ii. Personal Use. Subject to your continued compliance with these Terms, we grant you a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your Odd Fellow / NFT, provided that the marketplace cryptographically verifies each Odd Fellows owner’s rights to display the Art for their Odd Fellow to ensure that only the actual owner can display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your Odd Fellow, provided that the website/application cryptographically verifies each Odd Fellow owner’s rights to display the Art for their Odd Fellow to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Odd Fellow leaves the website/application.</p>
                <p>iii. Commercial Use. Subject to your continued compliance with these Terms, we grant you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of Odd Fellow generally, provided that the marketplace cryptographically verifies each Odd Fellow owner’s rights to display the Art for their Odd Fellow to ensure that only the actual owner can display the Art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Odd Fellows generally, provided that the third party website or application cryptographically verifies each Odd Fellow owner’s rights to display the Art for their Odd Fellow to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Odd Fellow leaves the website/application; or (iii) earning revenue from any of the foregoing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <Footer />
    </>

);
}

export default Term_condition;