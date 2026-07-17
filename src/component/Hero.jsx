import {motion} from 'framer-motion'
import { ArrowRight, Coffee } from 'lucide-react'
import chai from "../assets/chai.webp";

const Hero = () => {
  return (
   <>
     <motion.section
     initial={{opacity:0, y:-90}}
     animate={{opacity:1,y:0}}
     transition={{duration:0.9 }}
     id='home'
     className='flex items-center bg-stone-50 min-h-screen mt-30'
    >
        <div className='max-w-7xl mx-auto px-5 sm:px-7 lg:px-8 py-10 lg:py-20 '>
            
         <div className='grid lg:grid-cols-2 gap-14 items-center '>
            {/* left */}
               
               <div>
                {/* tag */}
                <div className='flex items-center gap-4 mb-8'>
                   <div className='w-10 h-[1px] bg-stone-500'/>

                   <p className='uppercase text-stone-600 text-xs tracking-[5px]'>
                     Since The First Pour
                   </p>
                </div>

                {/* heading */}
                 <h1 className='text-5xl sm:text-5xl lg:text-7xl leading-none text-stone-900 font-bold'>
                  Sip the {""}
                  <span className='text-orange-400 italic font-medium' 
                   style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    soul
                  </span>
                  <br />
                  of Indian chai.
                 </h1>

                 {/* paragraph */}
                 <p className='max-w-xl text-lg text-stone-500 leading-9   '>
                     Slow-brewed in terracotta kulhads over open flames. A love letter to street corners, monsoon evenings, and every quiet conversation that begins with
                     <span className=' italic '>
                      {""}
                      "ek chai ho jaye?"
                     </span>
                 </p>
                 {/* button */}
                   <div className='flex flex-wrap gap-5 mt-6 '>
                       <motion.button
                        whileTap={{ scale: 0.95 }}
                       className="flex items-center gap-3  bg-orange-500 hover:bg-orange-600  px-7 py-4 rounded-full text-white transition ">
                        Explore Menu
                        <ArrowRight className="w-5 h-5"/>
                       </motion.button>
                       <motion.button
                       whileHover={{ scale: 1.03 }}
                       whileTap={{ scale: 0.95 }}
                       className='flex items-center gap-3  hover:bg-stone-900 hover:text-white px-7 py-4 rounded-full transition border border-stone-700 '
                       >
                        <Coffee className='size-4'/>
                        Our Story
                       </motion.button>
                   </div>

               </div>

            {/* right */}
             <div className='relative'>
                  <img 
                   src={chai}
                   alt="chai image"
                   fetchPriority="high"
                    decoding="async"
                   className='rounded-xl h-[450px] lg:h-[570px] w-full object-cover'
                    />
             </div>
         </div>

        </div>

    </motion.section>
   </>
  )
}

export default Hero