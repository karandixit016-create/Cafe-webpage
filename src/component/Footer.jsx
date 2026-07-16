import {motion} from "framer-motion"
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
    initial={{opacity:0,y:40}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:.7}}
     className="bg-[#3b2214] text-stone-200 pt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-40">
               {/* logo */}
               
               <div>
                <div className="flex flex-col gap-3">
                         <h3
                           className="text-white text-4xl font-semibold"
                           style={{ fontFamily: '"Cormorant Garamond", serif' }}
                         >
                           Chai Sutta Bar
                         </h3>
                       
                         <p className="text-sm text-stone-400 leading-7">
                           Slow-brewed chai, warm plates and warmer
                           conversations. A little tapri with an enormous heart.
                         </p>
                 </div>

                 <div className="flex gap-4 mt-5">

                       <a href="#"
                       className="rounded-full size-11 bg-white/10 hover:bg-orange-400 duration-300 flex items-center justify-center  ">
                           <FaInstagram className="size-7"/>
                       </a>
       
                        <a href="#"
                         className="size-11 rounded-full bg-white/10 hover:bg-orange-500 duration-300 flex items-center justify-center"
                         >
                              <FaFacebookF className=""/>
                          </a>
          
                           <a href="#"
                            className="rounded-full size-11 bg-white/10 hover:bg-orange-400 duration-300 flex items-center justify-center  "
                             >
                              <FaYoutube className=""/>
                          </a>
          
                           <a href="#"
                            className="rounded-full size-11 bg-white/10 hover:bg-orange-400 duration-300 flex items-center justify-center  " >
                              <FaXTwitter className=""/>
                          </a>

               </div>

               </div>

               {/* links */}

               <div>
                 <h3 className="text-2xl font-semibold text-white mb-6">
                  Quick Links
                 </h3>

                 <ul className="space-y-2">
                    <li><a href="#home" className="href">Home</a></li>
                    <li><a href="#menu" className="href">Menu</a></li>
                    <li><a href="#story" className="href">Our Story</a></li>
                    <li><a href="#contact" className="href">Contact</a></li>
                 </ul>
               </div>

               {/* Contact */}
                <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-stone-400">

              <p>📍 Lane 4, Rangeela Bazaar</p>

              <p>📞 +91 98765 43210</p>

              <p>✉ hello@chaisuttabar.in</p>

              <p>🕘 8:00 AM - 11:00 PM</p>

            </div>

          </div>

            </div>
            
   {/* Bottom */}

        <div className="mt-16 border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-stone-500 text-center">

            © 2026 Chai Sutta Bar. All Rights Reserved.

          </p>

        <p className="text-stone-500 text-center">
          Crafted in kulhads. Served in stories.
        </p>

        </div>

        </div>
    </motion.footer>
  )
}

export default Footer