import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'czarny', text: 'czarny', value: 'czarny' },
  { key: 'czerwony', text: 'czerwony', value: 'czerwony' },
  { key: 'zielony', text: 'zielony', value: 'zielony' },
  { key: 'żółty', text: 'żółty', value: 'żółty' },
  { key: 'niebieski', text: 'niebieski', value: 'niebieski' },
  { key: 'biały', text: 'biały', value: 'biały' },
]

const DropdownExampleMultipleSelection = name => opt => ({onChange}) =>  (
  <Dropdown placeholder={name} fluid multiple selection options={opt} onChange={onChange}/>
)

export default DropdownExampleMultipleSelection