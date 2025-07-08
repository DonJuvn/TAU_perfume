import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
   return (
      <div id="header">
         <div className="header">
            <img src={process.env.PUBLIC_URL + "img/bg.png"} alt="" />
            <div className="logo">
               <Link to="/">
                  <img
                     src={process.env.PUBLIC_URL + "img/logo.png"}
                     alt="logo"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
