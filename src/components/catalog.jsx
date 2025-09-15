import React, { useState, useEffect } from "react";import RevealOnScroll from "./reveal";
import { Link } from "react-router-dom";

export default function Catalogue() {
   const cardsData = [
      {
         id: 1,
         img: "img/oudwood.svg",
         name: "Dior Sauvage",
         consistency: "Eau de Toilette",
         price: 45000,
      },
      {
         id: 2,
         img: "img/ombreleather.svg",
         name: "Bleu de Chanel",
         consistency: "Eau de Parfum",
         price: 50000,
      },
      {
         id: 3,
         img: "img/oudwood.png",
         name: "Armani Acqua di Gio",
         consistency: "Eau de Toilette",
         price: 42000,
      },
      {
         id: 4,
         img: "img/oudwood.png",
         name: "Tom Ford Oud Wood",
         consistency: "Eau de Parfum",
         price: 70000,
      },
      {
         id: 5,
         img: "img/oudwood.png",
         name: "Versace Eros",
         consistency: "Eau de Toilette",
         price: 39000,
      },
      {
         id: 6,
         img: "img/oudwood.png",
         name: "YSL La Nuit de L’Homme",
         consistency: "Eau de Parfum",
         price: 47000,
      },
      {
         id: 7,
         img: "img/oudwood.png",
         name: "Creed Aventus",
         consistency: "Eau de Parfum",
         price: 120000,
      },
      {
         id: 8,
         img: "img/oudwood.png",
         name: "Paco Rabanne Invictus",
         consistency: "Eau de Toilette",
         price: 36000,
      },
      {
         id: 9,
         img: "img/oudwood.png",
         name: "Jean Paul Gaultier Le Male",
         consistency: "Eau de Toilette",
         price: 34000,
      },
   ];

   const consistencyImg = [
      process.env.PUBLIC_URL + "/img/consistency1.svg",
      process.env.PUBLIC_URL + "/img/consistency2.svg",
      process.env.PUBLIC_URL + "/img/consistency3.svg",
      process.env.PUBLIC_URL + "/img/consistency4.svg",
   ];

   const [shuffledCards, setShuffledCards] = useState([]);
   const [visibleCount, setVisibleCount] = useState(6); // 2 rows

   useEffect(() => {
      // Shuffle + assign random consistency image
      const shuffled = [...cardsData]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({
            ...card,
            consistencyIcon:
               consistencyImg[
                  Math.floor(Math.random() * consistencyImg.length)
               ],
         }));
      setShuffledCards(shuffled);
   }, []);

   const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 6);
   };

   return (
      <section id="catalogue">
         <div className="container">
            <h2>Каталог</h2>
            <div className="grid">
               {shuffledCards.slice(0, visibleCount).map((card) => (
                  <RevealOnScroll key={card.id}>
                     <div className="card">
                        <div className="card-img">
                           <img
                              id="parfum"
                              src={card.img}
                              alt={card.name}
                           />
                        </div>
                        <div className="card-body">
                           <div className="consistency">
                              <img
                                 id="conImg"
                                 src={card.consistencyIcon}
                                 alt="consistency"
                              />
                              <p>{card.consistency}</p>
                           </div>
                           <h3>{card.name}</h3>
                           {/* <strong>{card.price} ₸</strong> */}
                           <Link to="#">
                              Купить{" "}
                              <img
                                 id="link"
                                 src="./img/grey-link.svg"
                                 alt="link icon"
                              />
                           </Link>
                        </div>
                     </div>
                  </RevealOnScroll>
               ))}
            </div>

            {visibleCount < shuffledCards.length && (
               <button className="load-more" onClick={handleLoadMore}>
                  Load More
               </button>
            )}
         </div>
      </section>
   );
}
