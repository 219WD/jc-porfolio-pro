// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import './HorizontalScroll.css';
// import img1 from '../assets/img-1.jpg';
// import img2 from '../assets/img-2.jpg';
// import img3 from '../assets/img-3.jpg';
// import img4 from '../assets/img-4.jpg';
// import img5 from '../assets/img-5.jpg';
// import img6 from '../assets/img-6.jpg';
// import img7 from '../assets/img-7.jpg';

// const HorizontalScroll = () => {
//   const sliderWrapperRef = useRef(null);
//   const slidesRef = useRef([]);
//   const targetRef = useRef(0);
//   const currentRef = useRef(0);
//   const ease = 0.075;

//   const images = [img1, img2, img3, img4, img5, img6, img7];

//   useEffect(() => {
//     const sliderWrapper = sliderWrapperRef.current;
//     const maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

//     const lerp = (start, end, factor) => start + (end - start) * factor;

//     const updateScaleAndPosition = () => {
//       slidesRef.current.forEach((slide) => {
//         const rect = slide.getBoundingClientRect();
//         const centerPosition = (rect.left + rect.right) / 2;
//         const distanceFromCenter = centerPosition - window.innerWidth / 2;

//         let scale, offsetX;
//         if (distanceFromCenter > 0) {
//           scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
//           offsetX = (scale - 1) * 300;
//         } else {
//           scale = Math.max(
//             0.5,
//             1 - Math.abs(distanceFromCenter) / window.innerWidth
//           );
//           offsetX = 0;
//         }

//         gsap.set(slide, { scale, x: offsetX });
//       });
//     };

//     const update = () => {
//       currentRef.current = lerp(currentRef.current, targetRef.current, ease);

//       gsap.set(sliderWrapper, {
//         x: -currentRef.current,
//       });

//       updateScaleAndPosition();

//       requestAnimationFrame(update);
//     };

//     const handleResize = () => {
//       maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
//     };

//     const handleWheel = (e) => {
//       targetRef.current += e.deltaY;
//       targetRef.current = Math.max(0, targetRef.current);
//       targetRef.current = Math.min(maxScroll, targetRef.current);
//     };

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('wheel', handleWheel);

//     update();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, [ease]);

//   return (
//     <div>
//       <div className="logo">
//         <a href="#">Timmons Tiffon</a>
//       </div>

//       <div className="sidebar">
//         <div className="sidebar-item">
//           <p id="header">neuro<br />holograph</p>
//           <p>Lab crafted synthetic leather <br />(Explore Catalog)</p>
//         </div>
//         <div className="sidebar-item">
//           <p>/I2IVU98</p>
//           <p>Scroll Experience</p>
//         </div>
//       </div>
//       <div className="slider">
//         <div className="slider-wrapper" ref={sliderWrapperRef}>
//           {images.concat(images).map((img, index) => (
//             <div className="slide" key={index} ref={el => slidesRef.current[index] = el}>
//               <img src={img} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;
