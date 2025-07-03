// import Image from 'next/image';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Define the Testimonial type
// interface Testimonial {
//   quote: string;
//   author: string;
//   position: string;
//   image: string;
// }

// const Carousel: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   const testimonials: Testimonial[] = [
//     {
//       quote: '"This game has completely changed my perspective on gaming. The graphics and story are phenomenal!"',
//       author: 'Jane Smith',
//       position: 'CMO of MyCompany',
//       image: '/images/testimonial1.jpg',
//     },
//     {
//       quote: '"Incredible experience! The attention to detail is unmatched in the industry."',
//       author: 'John Doe',
//       position: 'CEO of TechCorp',
//       image: '/images/testimonial2.jpg',
//     },
//     {
//       quote: '"A game-changer for our team. Highly recommend their innovative approach!"',
//       author: 'Alice Johnson',
//       position: 'CTO of GameWorks',
//       image: '/images/testimonial3.jpg',
//     },
//   ];

//   return (
//     <section className="relative py-12 px-4 md:px-8 lg:px-12 bg-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="relative outline-none">
//               <Image
//                 src={testimonial.image}
//                 alt={`${testimonial.author} testimonial`}
//                 width={1200}
//                 height={400}
//                 className="w-full h-64 object-cover opacity-50"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
//                   <svg
//                     className="w-8 h-8 text-gray-600 mx-auto mb-4"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M10 9h4v10h-4v-10zm-6 0h4v10h-4v-10zm12-6v16h-8v-10h-4v10h-4v-16h16z"/>
//                   </svg>
//                   <p className="text-gray-800 text-lg italic mb-4">{testimonial.quote}</p>
//                   <div className="flex items-center justify-center gap-2">
//                     <Image
//                       src="/images/avatar.jpg" // Placeholder avatar, replace with actual image
//                       alt={testimonial.author}
//                       width={50}
//                       height={50}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <p className="text-gray-900 font-semibold">{testimonial.author}</p>
//                       <p className="text-gray-600 text-sm">{testimonial.position}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Carousel;