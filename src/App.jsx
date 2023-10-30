// import React from 'react';

// import { useEffect } from 'react';
import './App.css';

import styled from 'styled-components'

const App = () => {


  const textStyle = {
    width: '100%', height: '10vh',
     backgroundColor: 'blue', 
     padding: '1rem', color: 'white',
    margin: '1rem'
  }

  const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin: 1rem;
  `

  const Title = styled.h1`
  color: red;
  font-size: 3rem;
  `


  return (
    <>
     <div style={textStyle}>
        <h1>React App</h1>
     </div>

     <div className="container">
      <h1> hello</h1>
     </div>

     <Wrapper className="container">
      <h1> style component approach</h1>
     </Wrapper>

      <Title>
        app title goes here
        </Title>
    </>

  );

};



export default App;