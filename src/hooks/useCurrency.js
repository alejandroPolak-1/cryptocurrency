import React, { Fragment, useState } from 'react'

const useCurrency = (label, stateInitial, options) => {
  //State of own hooks
  const [state, setState] = useState(stateInitial)

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select
      onChange={ e=> setState(e.target.value)}
      >
        <option value="">- Select -</option>
        
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  )

  // Retur state, interface and function that modifies the state
  return [state, Select, setState]
}

export default useCurrency
