import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import {BasketAdd} from '../reducers/basket'
import DropdownExampleMultipleSelection from './DropDown'

const colors = [
  { key: 'czarny', text: 'czarny', value: 'czarny' },
  { key: 'czerwony', text: 'czerwony', value: 'czerwony' },
  { key: 'zielony', text: 'zielony', value: 'zielony' },
  { key: 'żółty', text: 'żółty', value: 'żółty' },
  { key: 'niebieski', text: 'niebieski', value: 'niebieski' },
  { key: 'biały', text: 'biały', value: 'biały' },
]

const category = [
  { key: 'rectangle', text: 'rectangle', value: 'rectangle' },
  { key: 'circle', text: 'circle', value: 'circle' },
  { key: 'square', text: 'square', value: 'square' },
  { key: 'triangle', text: 'triangle', value: 'triangle' },
  { key: 'star', text: 'star', value: 'star' },
]

const ColorFilter = DropdownExampleMultipleSelection("Colors")(colors)
const CategoryFilter = DropdownExampleMultipleSelection("Categories")(category)

class MainInput extends Component {

	state = {
		productName: {}
	}

	handleInputSave = (evt) => {
		evt.preventDefault()
    	this.props.BasketAdd(this.state.productName)

  	}

  	handleInputChange = (evt,data) => {
  	  const name = data.placeholder
  	  
      this.setState({
        productName:{...this.state.productName,
        	[name] : data.value
        }
      })

      this.props.BasketAdd({
        	[name] : data.value
        })

    }




	render(){
		return(
			<React.Fragment>
			<h1>Color</h1>
			<ColorFilter onChange={this.handleInputChange}/>
			<h1>Category</h1>
			<CategoryFilter onChange={this.handleInputChange}/>
			</React.Fragment>
			
			)
	}
};

export default connect(
  (state) => ({currentBasket: state.basket.currentBasket}),
  {BasketAdd}
)(MainInput)