import React from 'react'
import useFirestore from './useFirestore'
import {motion} from 'framer-motion'

function Image( {setSelectedImg}) {
    const {docs} = useFirestore('images');


  return (
    <div className='img-grid'>
        {docs && docs.map (doc => (
            <motion.div
            layout
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
             className='img-wrap' whileHover = {{opacity: 1, scale: 1.2, rotate: 360}} onClick={() => setSelectedImg(doc.url)} key = {doc.id}>
            <motion.img src = {doc.url} 
            initial = {{opacity: 0}} 
            animate = {{opacity: 1}}
            transition = {{delay: 1}} />
            </motion.div>
        ))}
    </div>
  )
}

export default Image