// import React from 'react'
import { Cart } from "../components/Cart";
import Navbar from "../components/navbar";
import Products from "../components/Products";
import { motion } from "framer-motion";
import { styled } from "styled-components";
// import { useAuth } from "../Context/useAuth";


const ProductContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  alight-items: center;
  padding: 0.7rem 1rem;
  position: relative;
  z-index: -1;
`;
const Heading = styled.div`
margin: auto 0;
height: 8vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Home = () => {

  // const { currentUser } = useAuth();
  // console.log('currentUser', currentUser);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar />
        <Heading>
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Product Listings
          </h1>
        </Heading>
        <div className="shopping-items p-2">
            <ProductContainer>
              <Products />
            </ProductContainer>
          { <Cart />}
          </div>
      </motion.div>
    </>
  );
};

export default Home;
