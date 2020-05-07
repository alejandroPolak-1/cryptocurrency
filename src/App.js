import React from 'react'
import styled from '@emotion/styled'
import image from './cryptologo.png'
import Form from './components/Form'

const Conteiner = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  @media (min-width: 1022px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`

function App() {
  return (
    <Conteiner>
      <div>
        <Image src={image} alt="cryptocurrencies image" />
      </div>
      <div>
        <Heading> Cryptocurrencies Quotes </Heading>
        <Form />
      </div>
    </Conteiner>
  )
}

export default App
