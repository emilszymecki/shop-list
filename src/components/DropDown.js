import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownExampleMultipleSelection = name => opt => ({onChange}) =>  (
  <Dropdown placeholder={name} fluid multiple selection options={opt} onChange={onChange}/>
)

export default DropdownExampleMultipleSelection