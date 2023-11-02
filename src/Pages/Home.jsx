// import React from 'react'
import Navbar from '../components/navbar';
import Products from '../components/Products';
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
          <Navbar/>
          <div className="container mt-4"></div>
          <Products  />
        
      </motion.div>
    </>
  )
}

export default Home;