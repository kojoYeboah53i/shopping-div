
import './App.css';

import styled from 'styled-components'
import  { useState } from 'react';

const App = () => {


 const [firstName, setFirstName] = useState('Isaac')
 const [ background, setBackground] = useState('colorB')

  // setFirstName('John')
 const changeBackground = () => {
  // toggle 
    setBackground('colorA')
 }

  const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin: 1rem;
  width: 100%;
  `



  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />


     <Wrapper className="container text-center mx-auto mt-4">
      <div className="flex  justify-between items-center w-8/12 p-3 ">
      <h1 className="text-2xl"> {firstName} </h1>
        <button onClick={() => setFirstName('Yeboah') }
        className="bg-red-900 text-white py-3 px-6 rounded-lg hover:bg-white hover:text-red-800"> change</button>
      </div>
     </Wrapper>

     <div className={`container  ${background}  outline-none border-0`}>
       <div className="flex">
       <button onClick={() => changeBackground() }
        className="bg-pink-900 text-white py-3 px-6 rounded-lg hover:bg-white
         hover:text-red-800"> change background</button>
      
         </div>
     </div>

        
    </>

  );

};



export default App;