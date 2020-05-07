import React, { Fragment, useState } from 'react'

const useCurrency = () => {
  //State of own hooks
  const [state, setState] = useState('')

  const Select = () => (
    <Fragment>
      <label>Currency</label>
      <select>
        <option value="MXN">Mexican Peso</option>
      </select>
    </Fragment>
  )

  // Retur state, interface and function that modifies the state
  return[state, Select, setState]
}

export default useCurrency

