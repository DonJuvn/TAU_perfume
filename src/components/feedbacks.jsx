import React, { useRef, useState } from "react";import RevealOnScroll from "../components/reveal";
import FeedBack from "../components/feedback";

export default function Feedbacks() {
   const [active, setActive] = useState(null);
   const containerRef = useRef(null);

   const feedbacksData = [
      {
         name: "Алихан С.",
         post: "Недавно приобрела парфюм Tau от Onyrico — это просто находка! Сначала ощущается свежесть можжевельника и черного перца, а затем раскрывается глубокий древесно-мшистый шлейф с нотками березового дёгтя и пачули. Аромат напоминает прогулку по лесу после дождя — свежий и загадочный. Хотя стойкость могла бы быть лучше, я с удовольствием ношу его осенью и зимой.",
         img: "./img/consistency4.svg",
      },
      {
         name: "Мария П.",
         post: "Маркетолог",
         img: "./img/consistency1.svg",
      },
      {
         name: "Данияр Т.",
         post: "Предприниматель",
         img: "./img/consistency2.svg",
      },
      {
         name: "Ольга К.",
         post: "HR-менеджер",
         img: "./img/consistency3.svg",
      },
      {
         name: "Ержан Б.",
         post: "Директор по развитию",
         img: "./img/consistency4.svg",
      },
   ];

   // compute one-card scroll distance (robust)
   const getScrollStep = () => {
      const container = containerRef.current;
      if (!container) return 0;
      const first = container.children[0];
      if (!first) return 0;

      const second = container.children[1];
      // if there is a second card, use offsetLeft difference (includes gap)
      if (second) {
         return second.offsetLeft - first.offsetLeft;
      }
      // fallback to element width
      return first.offsetWidth;
   };

   const scrollByCard = (direction) => {
      const container = containerRef.current;
      if (!container || !container.firstChild) return;

      const step = getScrollStep();
      if (!step) return;

      // compute target and clamp it within allowed scroll range
      const maxScroll = container.scrollWidth - container.clientWidth;
      const current = container.scrollLeft;
      const delta = direction === "next" ? step : -step;
      let target = current + delta;

      // clamp
      if (target < 0) target = 0;
      if (target > maxScroll) target = maxScroll;

      container.scrollTo({
         left: target,
         behavior: "smooth",
      });

      setActive(direction);
      // optional: remove active state shortly after for styling
      setTimeout(() => setActive(null), 400);
   };

   return (
      <section id="feedbacks">
         <div className="container">
            <RevealOnScroll>
               <div className="cases-title">
                  <h1 id="title">Отзывы</h1>
                  <div className="nav-buttons">
                     <button
                        className={`nav-btn ${
                           active === "prev" ? "active" : ""
                        }`}
                        onClick={() => scrollByCard("prev")}
                     >
                        &#10094;
                     </button>
                     <button
                        className={`nav-btn ${
                           active === "next" ? "active" : ""
                        }`}
                        onClick={() => scrollByCard("next")}
                     >
                        &#10095;
                     </button>
                  </div>
               </div>
            </RevealOnScroll>

            <RevealOnScroll>
               <div
                  className="cases"
                  ref={containerRef}
                  style={{ overflowX: "auto", scrollBehavior: "smooth" }}
               >
                  {feedbacksData.map((item, index) => (
                     <FeedBack
                        key={index}
                        name={item.name}
                        post={item.post}
                        img={item.img}
                        description={item.description}
                     />
                  ))}
               </div>
            </RevealOnScroll>
         </div>
      </section>
   );
}
