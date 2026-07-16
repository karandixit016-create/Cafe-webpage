import { useState } from "react";
import { Circle, Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
     { name:"Home" , id:'#home'},
     { name:"Menu" , id:'#menu'},
     { name:"Our Story" , id:'#story'},
     { name:"Contact" , id:'#contact'},
    ]


  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    >
        <nav className="w-full fixed absolute top-0 left-0 z-[50] transparent bg-white/70 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-10 h-20 ">
              {/* logo */}
                <div className=" flex items-center gap-3 shrink-0 ">
                   <Circle 
                    className="size-4 fill-orange-600 "
                     strokeWidth={0}
                    />
                    <h1 className="text-3xl font-semibold ">  
                        Chai Sutta Bar
                    </h1>
                </div>

              {/* desktop menu*/}
                  <ul className="hidden md:flex items-center gap-6 lg:gap-12">
                     {navLinks.map((item) => (
                       <li key={item.id}>
                         <a
                           href={item.id}
                           className="relative text-[15px] font-medium transition duration-300 hover:text-dark after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                         >
                           {item.name}
                         </a>
                       </li>
                     ))}
                   </ul>
                     {/* right side  */}
                  <div className="flex items-center gap-4 ">

                   <motion.button
                    whileHover={{ scale: 1.09 }}
                    className="hidden md:flex items-center justify-center rounded-full bg- bg-[#E67B5F]
                   text-white px-7 py-2 font-semibold shadow-md duration-300 hover:bg-orange-700 ">
                    Our Order
                   </motion.button>

                    <button
                    onClick={()=> setMenuOpen(!menuOpen)} 
                    className="md:hidden ">
                         {menuOpen ? (
                          <X  className="size-7"/>
                         ):(
                           <Menu className=" size-7"/>
                         )
                        }
                    </button>
                  </div>  

                 
            </div>
                 {/* mobile menu */}
                  <div 
                  className={`md:hidden overflow-hidden transition-all  duration-300  ${
                      menuOpen ? "max-h-96 border-t border-border-stone-200" : "max-h-0"
                       }`}>
                        <div className="bg-stone-50 px-8 py-5"> 
                         
                         <ul className="flex flex-col gap-6">
                            {navLinks.map((item)=>(
                             <li key={item.id}>
                               <Link 
                               to={item.id}
                               onClick={()=> setMenuOpen(false)}
                               className=" block text-stone-900 hover:text-orange-400 font-medium">
                                {item.name}
                               </Link>
                             </li>  
                             ))}
                         </ul>

                         <button className="mt-8 w-full rounded-full bg-[#E67B5F] py-3 text-white font-semibold transition hover:bg-">
                           Order Now
                         </button>

                        </div>
                  </div>
        </nav>
    </motion.div>
  )
}

export default Navbar