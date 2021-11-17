import React, { Component } from 'react';
import Header from '../directives/header';
import Footer from '../directives/footer';

const Provenance = (props) => {



  return (

    <>
      <Header />
      <main className="main-content">

        <section id className="characters content-section mt-5 latest-articles text-light">
          <br />
          <div className="content-section text-light pt-0">
            <div className="container">
              <div className="row gutters-y">
                <div className="col-12">
                  <header>
                    <div className="row">
                      <div className="col-sm-6">
                      </div>
                      <div className="col-sm-6" />
                    </div>
                  </header>
                </div>
                <div className="col-sm-12 ">
                  <div className>
                    <h3 className>SECRET SOCIETY OF ODD FELLOWS PROVENANCE RECORD</h3>
                    <p className="lead-1">This page presents the provenance record of each Secret Society that will ever
                      exist. Each Secret Society image is firstly hashed using SHA-256 algorithm.
                      A combined string is obtained by concatenating SHA-256 of each Secret Society
                      image in the specific order as listed below. The final proof is obtained
                      by SHA-256 hashing this combined string. This is the final provenance record
                      stored on the smart contract.
                    </p><p>
                    </p></div>
                  <hr className="mb-0" />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className>

                        <h5>IMPORTANT INFORMATION</h5>
                        <p className="prov-base-text">Each Secret Society token ID is assigned to an artwork image from the initial
                          sequence with this formula:
                          <br />
                        </p><div className="prov-formula">(tokenId + startingIndex) % 10000 → Initial Sequence Index</div>
                        <br />Here's the relevant information:
                        <br />
                        <br />
                        <table className="prov-important-info-table">
                          <tbody><tr>
                            <td className="prov-key">FINALIZED STARTING INDEX</td>
                            <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                            <td>8853</td>
                          </tr>
                            <tr>
                              <td className="prov-key">SECRET SOCIETY OF ODD FELLOWS CONTRACT ADDRESS</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td><a className="link" href="#">0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="prov-key">FINAL PROOF HASH</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td><a className="link" href="#">cc354b3fcacee8844dcc9861004da081f71df9567775b3f3a43412752752c0bf</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="prov-key">ARWEAVE PERMAWEB URIS</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td><a className="link" href="#">List of Arweave URIs</a>
                              </td>
                            </tr>
                          </tbody></table>
                        <p />
                      </div>
                    </div>
                  </div>
                  <hr className="mb-0" />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className>

                        <h5>CONCATENATED HASH STRING</h5>
                        <p className="prov-base-text" /><div className="prov-hash-string">c92b0386542d8beb8fb167aed611e73c5f30250a083f54edf78653946a8a6913ba2ea17148a6b4fd17df39b4c5531d860c565f465c866213806bb8cfb96ada247edf3c2c26498ead3f4144c5d43509bbbaa2317edc3571ccd54be795705b2a8e6e89bf24717b39009dd7b8e742018602a7adb32762c27e2735b3bd38d45641e2a5a2a50e5ff57ae1234f4a8fa4c2630e9a215d46aa4bedd761e35d654e41eefeb80baadd4c5ddb1be8b3d21ef7ffde175b77c9a652dfae3b29971d8907281c632091eb5bf983a3b5beac921fa66e6aa1cb5bfdc6965b173c8e2697d8614b681805c1204e21a6cad5648d87c906d18232b9083a8cb1ed47e2a11405f5057f66ddf9b5c92daad7296a5f90e8f91401a35c068755067fab692ac6cff0e92bd3400f3f005e81f781ed1d492b2580fed6aef2b7b28396b11d38c7f20f345df212ddaa12c663e9408c16cf36392c05c7143713ebc79b83993131436467190d7cdbd91a3549711dd8e202ffe9da26db2618d46d74b25184875fe3c5aed905bafc0325ff7d336fe4ef10cee64950863317cabc3ebc16ac2e57f550dbde1294215aa68524ec91e0efd6e63a3880281f048a24fbfb8ed564851b9bcc2af3cb32a4b50b053d56f6c243cc67c89b6b05ad892a67d4cd7ebf34db38b35c66402a90780a8e746fa878da423b4c195c9b8baebdf45ef108663900e97dac11dcf39db2cb0634c4317a5ab7cb0780fe353009e1fca6c0623a19536c432cbca916be405cd2b3e3d36e8c73f61da88e4163e64c801dc558c49dd0daca1ca4614bd90524285ab936f0a742ac9662a387552aaf85776c17ad5a2d8d07e83345638950b738486a714c376ee57d1dc8caba98227024e49c44f88ae0ba0555240dce65360bd2cd1e0d8d84ec3d2a1a7b4e7f803926200f28d36a98d93536e3768a0664cc24eeedb95443fbfcc2a1667e0ad80d618264a1cf8b88ba6175d1916e07f8615ac7e1b946e0dbe7543af5749fa6a13996fb94c89089a455c2ecbab0ed93a321cb2abab7a459ef7427a9db10ba684714fcef8ef768e0994ddb4d6b560a6736cb8277420a00c0db887306207b8fd0f108b1177100660a734d5ed01a37e4bdbb56a54aef1600842dba30f3757a132f9bf50e1c80c9f21cb3fdfc0c4b12d2fd06d9b943581396966611d3b6d740b302a2983a148c6cbb7a669856b3ba060e0aed5c78f85181840d566461e904a7900eb864ded1df9486ed9c2b1d3f36eca9917eabf252c1983f444fc4db00037df9e5c9187cfa4be0ed2c13b6cb49a053f55cb7c65d907aa7a11d11df27c3155ef5174ea7f8f14c8b0f716f63b5f11cfcc2c692e8a360c20dd10ae354698e02b36e3fc1f4c5419a13dcc3d6ec615884b8ad2f4c43bb5dccc0693f8cb309840280821776c152fa0541977afa03632e562c786b11b573366749ab0fe6bac27dd7325db4d236e821c1d3ef0e41ea593923a44e6a0ab9a42b664fe49ad77233b5f839d404efb4c54df827f023ab643cdb860622a26eb9745c7b208bec08af8140530294f9f2…</div><p />
                      </div>
                    </div>
                  </div>
                  <hr className="mb-0" />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className>

                        <h5>PROVENANCE RECORD</h5>
                        <div className="table-responsive">
                          <table className="prov-table">
                            <tbody><tr>
                              <th>INITIAL SEQUENCE INDEX</th>
                              <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                              <th>ASSIGNED BAYC TOKEN ID</th>
                              <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                              <th>SHA-256 HASH</th>
                              <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                              <th>IPFS HASH</th>
                            </tr>
                            </tbody></table>
                        </div>
                        <div className="table-responsive">
                          <table className="prov-table">
                            <tbody><tr>
                              <td>0</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td>1147</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td>c92b0386542d8beb8fb167aed611e73c5f30250a083f54edf78653946a8a6913</td>
                              <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                              <td><a className="link" href="#">QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk</a>
                              </td>
                            </tr>
                              <tr>
                                <td>1</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1148</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>ba2ea17148a6b4fd17df39b4c5531d860c565f465c866213806bb8cfb96ada24</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmRL5ve3u7aN9RFMTmV1vWb6xsbyAYKDgkqyK9DCJJCaJD</a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1149</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>7edf3c2c26498ead3f4144c5d43509bbbaa2317edc3571ccd54be795705b2a8e</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmVEGtJGAKmYZyYMQAHqebPMfasKa7WY2urFuaCse1zkWf</a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1150</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>6e89bf24717b39009dd7b8e742018602a7adb32762c27e2735b3bd38d45641e2</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmTb52c3ks8R1pif7L56sCYXX8TQebtB6raGBP21QzCHj4</a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1151</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>a5a2a50e5ff57ae1234f4a8fa4c2630e9a215d46aa4bedd761e35d654e41eefe</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmYt4Nab7Lxe3sQ78UKfV1bnVDXtSqiLcki91YZkKpVvEY</a>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1152</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>b80baadd4c5ddb1be8b3d21ef7ffde175b77c9a652dfae3b29971d8907281c63</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmQsxRXfVxxC5k9Uo8U51QcBtiA6TNmHAenbPMar7vFZrt</a>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1153</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>2091eb5bf983a3b5beac921fa66e6aa1cb5bfdc6965b173c8e2697d8614b6818</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmNbzR7GuKo3b8wtjeYDWw6w7TcQh3pUSdu9hedEc299AA</a>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>1154</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td>05c1204e21a6cad5648d87c906d18232b9083a8cb1ed47e2a11405f5057f66dd</td>
                                <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                                <td><a className="link" href="#">QmaQC8M51iBN7Pm8BJp5euFPQqViAXnNM5te9o25meaScy</a>
                                </td>
                              </tr>
                            </tbody></table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-0" />
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

export default Provenance;