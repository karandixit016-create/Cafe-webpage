import {motion} from 'framer-motion'


const MovingBanner = () => {
  return (
    <div className='overflow-hidden bg-stone-700 py-5'>
        <motion.div 
          animate={{x: ["0%" , "-50%"]}}
          transition={{
                repeat:Infinity,
                ease:"linear",
                duration:20
          }}
          className='flex whitespace-nowrap gap-12 text-white text-lg font-medium'
          >
          {Array.from({ length: 2 }).map((_, index) => (
             <div key={index} className="flex gap-12">
               <span>☕ Freshly Brewed</span>
               <span>●</span>
               <span>Kulhad Chai</span>
               <span>●</span>
               <span>Authentic Taste</span>
               <span>●</span>
               <span>Since 1998</span>
               <span>●</span>
             </div>
           ))}
       </motion.div>
    </div>
  )
}

export default MovingBanner