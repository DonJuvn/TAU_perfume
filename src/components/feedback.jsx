import React from "react";const FeedBack = ({ name, post, img }) => {
   return (
      <div className="feedback">
         <p>{post}</p>
         <h1>
            <img src={img} alt="" />
            {name}
         </h1>
      </div>
   );
};

export default FeedBack;
