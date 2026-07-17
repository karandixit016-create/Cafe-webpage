
import { motion } from 'framer-motion';
import { MenuData } from './MenuData';

const MenuSection = () => {
  return (
    <section id="menu"
    className="py-20 bg-stone-50"
    >
       
       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* heading  */}
           <motion.div
             initial={{opacity:0 , y:40}}
             whileInView={{opacity:1 , y:0}}
             transition={{duration:0.7}}
             viewport={{once:true}}
             className='flex flex-col  lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-10'
           >
            {/* right side */}
               <div className='max-w-2xl  '>
                
                   <p className='text-sm text-orange-600 uppercase  font-medium tracking-[2px]'>
                     the menu
                   </p> 

                   <h2 className='text-4xl md:text-6xl tracking-[2px] font-bold text-stone-900 mt-5'
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    Small plates,
                     <span className='text-orange-500 italic font-medium'>{""} bigger</span>
                     <br /> 
                    conversations.
                   </h2>
               </div>
            {/* left side */}
              <p className='text-stone-900 max-w-md mx-auto   leading-8'>   
                   Everything on our menu is designed to be paired with a cup of chai and a friend. Try the classics —  or find your new favourite.
              </p>
           </motion.div>
          {/* card */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 py-7 px-8'>
            {MenuData.map((item , index)=>(
              <motion.div
                  key={item.id}
                  initial={{opacity:0 , y:40}}
                  whileInView={{opacity:1 , y:0}}
                  whileHover={{y:-20 , scale:1.02}}
                  transition={{duration:.1,
                    delay:index*0.02}}
                  viewport={{once:true}}
                  className='overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl duration-300 group'
                  >

                    {/* image */}

                    <div className='overflow-hidden relative'>
                       <img
                        src={item.image}
                         alt={item.title}
                         loading="lazy"
                         decoding="async"
                         className='h-72 w-full object-cover group-hover:scale-110 duration-300'
                         />

                         {/* price */}
                  
                      <span className="absolute top-4 right-4 bg-stone-300 px-4 py-2 rounded-full font-semibold text-stone shadow-md" >
                        {item.price}
                      </span>

                    </div>

                    {/* content */}
                    <div className='p-3'>
                        <h3 className='text-2xl font-semibold text-stone-900'
                         style={{ fontFamily: '"Cormorant Garamond", serif' }}> 
                            {item.title}
                        </h3>
                    </div>
                   {/* description */}
                   <div className='p-3'>
                     <p className='text-sm font-normal text-stone-500'>
                         {item.description}
                     </p>
                   </div>
                   
                   
        
              </motion.div>
            ))}
          </div>

       </div>

    </section>
  )
}

export default MenuSection