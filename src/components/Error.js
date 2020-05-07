import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

//Styled Component
const MessageError = styled.p`
background-color: #B7322c;
padding: 1rem;
color: #FFF;
font-size: 30px;
text-transform: uppercase;
font-weight: bold;
text-align: center;
font-family: 'Bebas Neue', cursive;
`

//Component
const Error = ({message}) => {
return (<MessageError>{message}</MessageError>);
}
 
export default Error;