import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

//styled component
const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`
const Select = styled.select`
width: 100%;
display: block;
padding: 1rem;
-webkit-appearance: none;
border-radius: 10px;
border:none;
font-size: 1.2rem;
text-align-last: center;
`


const useCryptocurrency = (label, stateInitial, options) => {
 
    // console.log(options)
    const [state, setState] = useState(stateInitial)

    const SelectCrypto = () => (
      <Fragment>
        <Label>{label}</Label>
        <Select
        onChange={ e=> setState(e.target.value)}
        value= {state}
        >
          <option value="">- Select -</option>
          
          {options.map((option) => (
            <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
              {option.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </Fragment>
    )
  
    // Retur state, interface and function that modifies the state
    return [state, SelectCrypto, setState]
  }

export default useCryptocurrency