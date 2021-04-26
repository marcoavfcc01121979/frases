import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Botton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  } 

`;

function App() {
  // state de frases
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await resultado.json();
    setFrase(frase[0])
  }

  useEffect(() => {
    consultarAPI()
  },[])

  return (
      <Contenedor>
        <Frase 
          frase={frase}
        />
        <Botton
          onClick={consultarAPI}
        >
          Obter Frase 
        </Botton>
      </Contenedor>
  );
}

export default App
