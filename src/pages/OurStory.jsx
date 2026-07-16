import {motion} from "framer-motion"
import kulad from "../assets/kulad.webp"


const OurStory = () => {

  const stats = [
    {
      id:1,
     number:"12+",
     text:"Years brewing"
    },
    {
      id:2,
      number:"38",
      text:"Outlets & counting"
    },
    {
      id:3,
      number:"1M+",
      text:"Kulhads poured"
    },
  ]

  return (
   <section
   id="story"
   className="py-20 lg:py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* left side */}
              <motion.div
                initial={{opacity:0, y:90}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.4}}
                className="overflow-hidden rounded-[30px]"               
              >
                <img
                 src={kulad}
                 alt="Our Story"
                 className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 duration-300" 
                 />
              </motion.div>

              {/* right contant */}
              <div >
                <motion.p
                 initial={{opacity:0 , x:-50}}
                 whileInView={{opacity:1, x:0}}
                 transition={{duration:.7}}
                 viewport={{once:true}}
                className="text-sm text-orange-400 uppercase tracking-[4px] font-semibold">
                  — Our Story  
                </motion.p>

                <motion.h3
                  initial={{opacity:0 , y:50}}
                 whileInView={{opacity:1, y:0}}
                 transition={{duration:.7}}
                 viewport={{once:true}}
                className="text-4xl lg:text-6xl font-bold text-stone-600 mt-6 tracking-[2px]">
                  A little tapri.<br/>
                   An {""} 
                   <span className="text-orange-600" style={{ fontFamily: '"Cormorant Garamond", serif' }}>enormous</span>  
                    {""} love for chai.
                </motion.h3>

                <motion.p
                
                 initial={{opacity:0 , y:40}}
                 whileInView={{opacity:1,y:0}}
                 transition={{duration:0.7}}
                 viewport={{once:true}}
                className="text-sm font-semibold tracking-[2px] mt-7 text-stone-700">
                    Chai Sutta Bar began in a narrow lane, with a single stove, an earthy kulhad, and a stubborn belief that chai isn't a drink — it's a pause. A permission slip to slow down.
                </motion.p>

                 <motion.p
                 initial={{opacity:0 , y:40}}
                 whileInView={{opacity:1,y:0}}
                 transition={{duration:0.7}}
                 viewport={{once:true}}
                  className="text-sm font-semibold tracking-[2px] mt-5 text-stone-700">
                    Today, we still fire our chai on open flames, still crumble cardamom by hand, and still refuse to serve chai in anything other than a fresh clay kulhad. Some things aren't meant to be rushed.
                </motion.p>

                 <hr className="mt-10 text-stone-300"/>
                 
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3  gap-8 mt-5" >
                     {stats.map((item,index)=>(
                       <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-5xl md:text-6xl font-semibold text-[#E67B5F]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {item.number}
                </h2>

                <p className="mt-2 text-sm md:text-lg tracking-[4px] uppercase text-stone-500 leading-7">
                  {item.text}
                </p>
              </motion.div>
                     ))}

                    </div>
                  </div>

              </div>
            </div>

        </div>
   </section>
  )
}

export default OurStory