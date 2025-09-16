import React from "react";import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <section id="footer">
<div className="container">
            <div className="logo">
            <Link to="/">
               <img src="img/logo-black.svg" alt="logo" />
            </Link>
         </div>
         <div className="footer-nav">
            <Link to="https://wa.link/b77ycc">
               Консультация
               <img src="img/link-black.svg" alt="" />
            </Link>
            <Link to="https://www.instagram.com/tau.perfume/">
               Instagram
               <img src="img/link-black.svg" alt="" />
            </Link>
            <Link to="https://wa.link/b77ycc">
               WhatsApp
               <img src="img/link-black.svg" alt="" />
            </Link>
         </div>
         <p>õziñdi erekshe sezin | ©2024</p>
</div>
      </section>
   );
};

export default Footer;
