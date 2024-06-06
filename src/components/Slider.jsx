import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import img1 from '../assets/img-1-2.png'
import img2 from '../assets/img-5.png'
import img3 from '../assets/img-2-2.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-3-2.png'
import img6 from '../assets/img-6.png'
import './Slider.css'

const Slider = () => {
    const itemsRef = useRef([]);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
  
    useEffect(() => {
      let current = 0;
      let directionForward = true;
      const items = itemsRef.current;
  
      const getCard = (item) => {
        return item.querySelector(".card");
      };
  
      const getTitle = (item) => {
        return item.querySelector(".title span");
      };
  
      const setItems = () => {
        items.forEach((item, index) => {
          getTitle(item).innerHTML = getTitle(item).textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          );
  
          if (index === current) return;
  
          anime.set(getCard(item), {
            translateX: "100vw",
          });
  
          anime.set(getTitle(item).querySelectorAll(".letter"), {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          });
        });
  
        anime.set(items[current], {
          translateX: 0,
          opacity: 1,
        });
      };
  
      const animate = {
        in(item) {
          const card = getCard(item);
          const title = getTitle(item);
  
          const tl = anime.timeline({
            duration: 1000,
            easing: "easeOutExpo",
          });
  
          tl.add({
            targets: card,
            translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
            rotate: [40, 0],
          }).add(
            {
              targets: title.querySelectorAll(".letter"),
              clipPath: [
                "polygon(0 0, 100% 0, 100% 0, 0 0)",
                "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              ],
              translateY: directionForward ? ["1em", 0] : ["-1em", 0],
              delay: anime.stagger(40),
            },
            "-=1000"
          );
  
          return tl;
        },
  
        out(item) {
          const card = getCard(item);
          const title = getTitle(item);
  
          const tl = anime.timeline({
            duration: 1000,
            easing: "cubicBezier(0.86,0,0.07,1);",
          });
  
          tl.add({
            targets: card,
            translateX: directionForward ? [0, "-100vw"] : [0, "100vw"],
            rotate: [0, -40],
          }).add(
            {
              targets: title.querySelectorAll(".letter"),
              clipPath: [
                "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              ],
              translateY: directionForward ? [0, "-1em"] : [0, "1em"],
              delay: anime.stagger(40),
            },
            "-=1000"
          );
  
          return tl;
        },
      };
  
      function updateClasses() {
        items.forEach((item, index) => {
          if (index === current) {
            item.classList.add("is-active");
          } else {
            item.classList.remove("is-active");
          }
        });
      }
  
      function next() {
        if (!directionForward) {
          directionForward = !directionForward;
        }
        animate.out(items[current]);
        current = (current + 1) % items.length;
        setTimeout(function () {
          animate.in(items[current]);
        }, 500);
        updateClasses();
      }
  
      function prev() {
        if (directionForward) {
          directionForward = !directionForward;
        }
        animate.out(items[current]);
        current = (current - 1 + items.length) % items.length;
        setTimeout(function () {
          animate.in(items[current]);
        }, 500);
        updateClasses();
      }
  
      nextBtnRef.current.addEventListener("click", next);
      prevBtnRef.current.addEventListener("click", prev);
  
      setItems();
  
      // Clean up event listeners on unmount
      return () => {
        nextBtnRef.current.removeEventListener("click", next);
        prevBtnRef.current.removeEventListener("click", prev);
      };
    }, []);
    return (
        <div className='page-slider'>
            <div className="hero-proyects">
                <div className="card-slider">
                    <div className="nav">
                        <div className="prev" ref={prevBtnRef}>
                            <svg viewBox="0 0 50 9">
                                <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
                            </svg>
                        </div>
                        <div className="next" ref={nextBtnRef}>
                            <svg viewBox="0 0 50 9">
                                <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item is-active" ref={(el) => (itemsRef.current[0] = el)}>
                            <p className="title"><span>diseño</span></p>
                            <div className="card">
                                <img className="card-bg" src={img1} alt="stockmanager mobile" />
                            </div>
                        </div>
                        <div className="item" ref={(el) => (itemsRef.current[1] = el)}>
                            <p className="title"><span>responsivo</span></p>
                            <div className="card">
                                <img className="card-bg" src={img2} alt="stockmanager desktop" />
                            </div>
                        </div>
                        <div className="item" ref={(el) => (itemsRef.current[2] = el)}>
                            <p className="title"><span>adaptable</span></p>
                            <div className="card">
                                <img className="card-bg" src={img3} alt="nt mobile" />
                            </div>
                        </div>
                        <div className="item" ref={(el) => (itemsRef.current[3] = el)}>
                            <p className="title"><span>para</span></p>
                            <div className="card">
                                <img className="card-bg" src={img4} alt="nt desktop" />
                            </div>
                        </div>
                        <div className="item" ref={(el) => (itemsRef.current[4] = el)}>
                            <p className="title"><span>celulares</span></p>
                            <div className="card">
                                <img className="card-bg" src={img5} alt="mr mobile" />
                            </div>
                        </div>
                        <div className="item" ref={(el) => (itemsRef.current[5] = el)}>
                            <p className="title"><span>computadoras</span></p>
                            <div className="card">
                                <img className="card-bg" src={img6} alt="mr desktop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider