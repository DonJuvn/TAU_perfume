import React from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "./reveal";

const Header = () => {
   return (
      <section id="header">
         <div className="container">
            <RevealOnScroll>
               <div className="header">
                  <div className="logo">
                     <Link to="/">
                        <img
                           src={process.env.PUBLIC_URL + "img/logo.svg"}
                           alt="logo"
                        />
                     </Link>
                  </div>
                  <div className="social">
                     <Link to="#">
                        Instagram{" "}
                        <img
                           src={process.env.PUBLIC_URL + "img/link.svg"}
                           alt="logo"
                        />
                     </Link>
                     <Link to="#">
                        Whatsapp{" "}
                        <img
                           src={process.env.PUBLIC_URL + "img/link.svg"}
                           alt="logo"
                        />
                     </Link>
                  </div>
               </div>
            </RevealOnScroll>
            <RevealOnScroll>
               <div className="sale">
                  <h1>2+1</h1>
                  <p>Покупаешь два парфюма, один в подарок</p>
               </div>
            </RevealOnScroll>
               <div className="ozs">
                  <img src="./img/avatar.svg" alt="" />
                  <div className="text">
                     <p>tau.perfume</p>
                     <p id="bold">õziñdi erekshe sezin</p>
                  </div>
               </div>
         </div>
      </section>
   );
};

export default Header;
