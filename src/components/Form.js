import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCryptocurrency'
import axios from 'axios'

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`
//


const Form = () => {

//State list of cryptocurrencies, setListCrypto -> save List
const [listcrypto, setListCrypto] = useState([])

  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
    { code: 'ARS', name: 'Argentine Peso' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'PYG', name: 'Guarani' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'MXN', name: 'Mexican Peso' },
  ]

  // Use useCurrency
  const [currency, SelectCurrency] = useCurrency(
    'Select your Currency',
    '',
    CURRENCIES,
  )

  // Use useCryptocurrency (text, value)
  const [cryptocurrency, SelectCrypto] = useCryptocurrency(
    'Select your Cryptocurrency',
    '',
    listcrypto
  )

//Ejecute call api, use axios
useEffect(()=>{
 const quoteAPI= async () => {
const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

const result = await axios.get(url)
setListCrypto(result.data.Data)
 }
 quoteAPI()
}, [])

  return (
    <form>
      <SelectCurrency />
      <SelectCrypto />

      <Button type="submit" value="calculate" />
    </form>
  )
}

export default Form
