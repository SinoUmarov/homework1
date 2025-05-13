import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Container from "./container/container";
import Button from "./components/button/button";
import mainImg from "#/mainImg.svg";
import Rounde, { Images } from "./components/card/card";
import rounde1 from "#/rounde1.svg";
import rounde2 from "#/rounde2.svg";
import rounde3 from "#/rounde3.svg";
import kuza from "#/kuza.svg";
import kuza2 from "#/kuza2.svg";
import img1 from "#/img1.svg";
import img2 from "#/img2.svg";
import img3 from "#/img3.svg";
import img4 from "#/img4.svg";
import img5 from "#/img5.svg";
import img6 from "#/img6.svg";
import tme from "#/tme.svg";
import Info from "./components/info/info";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <section className="main">
          <div className="left">
            <div>
              <p className="ff2 textRed">Pompeo POttery</p>
              <h1 className="ff2">Unique Porcelain Stone Collection</h1>
              <p className="ff1 lorem">
                Unique & modern pottery made by our master in porcelain & stones
              </p>
            </div>
            <Button>Shop Collection</Button>
          </div>
          <img className="mainImg" src={mainImg} alt="" />
        </section>

        <section className="main2">
          <div className="texts">
            <p className="ff2 textRed">Product Categories</p>
            <h2>Porcelain Pottery</h2>
          </div>

          <div className="divRoundes">
            <Rounde bgColor={"#E4B366"} src={rounde1} title={"Vases"} />
            <Rounde bgColor={"#F05B10"} src={rounde2} title={"Mugs"} />
            <Rounde bgColor={"#A21010"} src={rounde3} title={"Plates"} />
          </div>

          <div className="pottery">
            <div className="potterChild">
              <h3 className="ff2">Hand Grafted Pottery since 1990</h3>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
            </div>
            <div className="potterChild">
              <h3 className="ff2">We Provide Premium Pottery Produts</h3>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
            </div>
          </div>
        </section>

        <section className="divInfo">
          <img className="img" src={kuza} alt="" />
          <Info title={"Gold & Black Pottery"} />
        </section>

        <section className="divInfo">
          <Info title={"Orange Ceramic"} />
          <img className="img" src={kuza2} alt="" />
        </section>

        <section className="main2">
          <div className="texts">
            <p className="ff2 textRed">Product Categories</p>
            <h2>Porcelain Pottery</h2>
          </div>

          <div className="sectionImages">
            <Images src={img1} title={"Decor Plate"} price={"$ 65.00 USD"} />
            <Images src={img2} title={"Mint Pottery"} price={"$ 75.00 USD"} />
            <Images
              src={img3}
              title={"Set Of Potterys"}
              price={"$ 125.00 USD"}
            />
            <Images
              src={img4}
              title={"Orange Ceramic"}
              price={"$ 550.00 USD"}
            />
            <Images
              src={img5}
              title={"Orange Ceramic"}
              price={"$ 115.00 USD"}
            />
            <Images src={img6} title={"Square Pottery"} price={"$ 75.00 USD"} />
          </div>
          <Button>View All Products</Button>
        </section>

        <section className="main3">
          <div className="left">
            <div>
              <p className="ff2 textRed">Pompeo POttery</p>
              <h1 className="ff2">Ready to start shopping?</h1>
              <p style={{ fontWeight: "700" }} className="ff1 lorem">
                Lorem ipsum dolor sit amet,{" "}
                <span className="ff2 textRed">consectetur adipiscing elit</span>{" "}
                . Suspendisse varius enim in eros elementum.
              </p>
            </div>
            <Button>Shop Collection</Button>
          </div>
        </section>

        <section className="divInputs">
          <div style={{ marginTop: "90px" }} className="texts">
            <img src={tme} alt="" />
            <p className="ff2 textRed">Latest news</p>
            <h2>Latest news New updates</h2>
          </div>

          <div className="login">
            <input type="text" placeholder="Enter your email"/>
            <Button>SUBSCRIBE</Button>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <p style={{width: '13px', height: '13px', backgroundColor: '#8534FF'}}></p>
            <p className="lorem">Sign up for our newsletter</p>
          </div>
        </section>

        <footer>
            <Footer/>
        </footer>
      </Container>
    </div>
  );
};

export default App;
