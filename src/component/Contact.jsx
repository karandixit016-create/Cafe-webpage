
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { ContactData } from './ContactData';


const Contact = () => {
  return (
    <section
    id="contact"
    className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-5  lg:px-10">
            {/* heading */}
            <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className='mb-16'
            >
                <p className="text-orange-500 tracking-[5px] text-sm font-semibold uppercase">
                     — Visit / reserve
                </p>

                <h3 className=' font-bold text-5xl text-stone-800 leading-none mt-4 lg:text-6xl '>
                     Come sit. Stay a {""}
                     <span className='text-orange-600  italic'
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        while 
                     </span>
                     {""}
                     .
                </h3>
            </motion.div>

            {/* main grid */}
            <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8'>
             {/* left side */}
             <motion.div
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.7}}
              className='bg-white/80 rounded-xl p-8 shadow-lg'
             >
             <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-6 '>
              
              <div>
                
               <label className='block uppercase text-stone-700 tracking-[3px] mb-3 text-xs'>
                Name
               </label>

               <input type="text"
                 placeholder='Rahul Sharma'
                 className='rounded-2xl w-full bg-stone-200 focus:shadow-lg  px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300'
               />

              </div>

              <div>
                <label  className='block uppercase text-stone-700 tracking-[3px] mb-3 text-xs'>
                    Email
                </label>
                <input type="email" 
                placeholder='you@email.com'
                className='w-full rounded-2xl bg-stone-200 focus:shadow-lg px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300 required'/>
              </div>

               <div>
                <label  className='block uppercase text-stone-700 tracking-[3px] mb-3 text-xs'>
                    Guest
                </label>
                <select className='bg-stone-200 w-full focus:shadow-lg  rounded-2xl px-5 py-3 outline-none appearance-none'>
                    <option>Just Me</option>
                    <option>2 Guest</option>
                    <option>3 Guest</option>
                    <option>4 Guest</option>
                </select>
              </div>

               <div>
                <label  className='block uppercase text-stone-700 tracking-[3px] mb-3 text-xs'>
                    Preferred slot
                </label>
                <select className='bg-stone-200 w-full focus:shadow-lg  rounded-2xl px-5 py-3 outline-none appearance-none'>
                    <option>Morning (8-11 AM)</option>
                    <option>Afternoon (12-4 PM)</option>
                    <option>Evening (5-8 PM)</option>
                    <option>Night (9-11 PM)</option>
                </select>
              </div>

             </div>
             
              <div className='mt-6'>
                
               <label className='block uppercase text-stone-700 tracking-[3px] mb-3 text-xs'>
                A note (optional)
               </label>

               <textarea type="text"
               row="7"
                 placeholder=' Any dietary preferences, birthday plans, or a cozy corner?'
                 className='rounded-2xl w-full bg-stone-200   px-5 py-9 outline-none focus:ring-2 focus:ring-orange-300 focus:shadow-lg '
               />

              </div>
             
             <motion.button
             whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className='bg-orange-500 rounded-2xl px-5 py-4 mt-6 flex items-center gap-2    text-white font-semibold hover:bg-orange-700 shadow-lg '
             >
              Reserve my kulhad 
              <Send size={20}/>
             </motion.button>

             </motion.div>

             {/*right side  */}

             <motion.div
              initial={{opacity:0,x:80}}
              whileInView={{opacity:1, x:0}}
              viewport={{once:true}}
              transition={{duration:.7}}
              className='bg-[#3b2214] rounded-[35px] p-10 text-white'>

                <h3 className='text-white font-bold mb-10 text-4xl '>Where to find us</h3>
                 
                 <div>
                  {ContactData.map((item)=>{
                    const Icon = item.icon;
                    return (
                      <div key={item.id}
                      className='flex gap-6 border-b border-white/10 p-6'> 
                         
                         <div className='size-14 rounded-2xl bg-yellow-700/30 flex items-center justify-center '> 
                          <Icon className="text-yellow-400"/>
                         </div>
                        <div>
                           <p className='text-stone-400 uppercasetracking-[3px] mb-2 '>
                          {item.title}
                         </p>
                         <p className='text-2xl leading-8'
                          style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                          {item.value}
                         </p>
                        </div>

                      </div>
                    )
                  })}
                 </div>

             </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact