import { Clock, Mail, MapIcon, Phone, } from "lucide-react";

export const ContactData =[
  {
    id:1,
    icon:MapIcon,
    title:"Address",
    value:"Lane 4, Rangeela Bazaar, Indore 452001"
  },
  {
    id:2,
    icon:Phone,
    title:"Phone",
    value:"+9832023101",
  },
  {
    id:3,
    icon:Mail,
    title:"Email",
    value:"Chaisuttabar@gail.com"
  },
  {
    id:4,
    icon:Clock,
    title:"Hours",
    value:"Everyday (8AM - 11PM)"
  }
]







// import {
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube,
//   ArrowUp,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2E1A10] text-stone-200 pt-20">

//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* Logo */}

//           <div>

//             <div className="flex items-center gap-3">

//               <span className="size-3 rounded-full bg-orange-400"></span>

//               <h2 className="text-3xl font-bold text-white">
//                 Chai Sutta Bar
//               </h2>

//             </div>

//             <p className="mt-6 leading-8 text-stone-400">

//               Every cup tells a story. Freshly brewed chai,
//               delicious snacks and unforgettable conversations.

//             </p>

//             <div className="flex gap-4 mt-8">

//               <a
//                 href="#"
//                 className="size-11 rounded-full bg-white/10 hover:bg-orange-500 duration-300 flex items-center justify-center"
//               >
//                 <Instagram size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="size-11 rounded-full bg-white/10 hover:bg-orange-500 duration-300 flex items-center justify-center"
//               >
//                 <Facebook size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="size-11 rounded-full bg-white/10 hover:bg-orange-500 duration-300 flex items-center justify-center"
//               >
//                 <Twitter size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="size-11 rounded-full bg-white/10 hover:bg-orange-500 duration-300 flex items-center justify-center"
//               >
//                 <Youtube size={18} />
//               </a>

//             </div>

//           </div>

//           {/* Links */}

//           <div>

//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Quick Links
//             </h3>

//             <ul className="space-y-4">

//               <li><a href="#home" className="hover:text-orange-400 duration-300">Home</a></li>

//               <li><a href="#menu" className="hover:text-orange-400 duration-300">Menu</a></li>

//               <li><a href="#story" className="hover:text-orange-400 duration-300">Our Story</a></li>

//               <li><a href="#contact" className="hover:text-orange-400 duration-300">Reserve</a></li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Contact
//             </h3>

//             <div className="space-y-4 text-stone-400">

//               <p>📍 Lane 4, Rangeela Bazaar</p>

//               <p>📞 +91 98765 43210</p>

//               <p>✉ hello@chaisuttabar.in</p>

//               <p>🕘 8:00 AM - 11:00 PM</p>

//             </div>

//           </div>

//           {/* Newsletter */}

//           <div>

//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Newsletter
//             </h3>

//             <p className="text-stone-400 leading-7">

//               Subscribe and receive our latest offers &
//               new flavours.

//             </p>

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full mt-6 rounded-xl bg-white/10 px-5 py-4 outline-none placeholder:text-stone-500"
//             />

//             <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 duration-300 rounded-xl py-4 font-semibold">

//               Subscribe

//             </button>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="mt-16 border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

//           <p className="text-stone-500 text-center">

//             © 2026 Chai Sutta Bar. All Rights Reserved.

//           </p>

//           <a
//             href="#home"
//             className="size-12 rounded-full bg-orange-500 hover:bg-orange-600 duration-300 flex items-center justify-center"
//           >

//             <ArrowUp />

//           </a>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;