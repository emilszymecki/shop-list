import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BasketAdd,BasketPickup} from '../reducers/basket'

class MainInput extends Component {

	state = {
		productName: ""
	}

	componentDidMount(){
		this.setState({
			productName:this.props.currentBasket
		})
	}


	handleInputSave = (evt) => {
		evt.preventDefault()
    	this.props.BasketAdd(this.state.productName)
    	this.props.BasketPickup(this.state.productName)
  	}

  	handleInputChange = (evt) => { 

  	  evt.preventDefault()
      this.setState({
        productName: evt.target.value 
      })
    }




	render(){
		return(
			<form onSubmit={this.handleInputSave}>
				<input type="text" onChange={this.handleInputChange} value={this.state.productName}/>
			</form>
			)
	}
};

export default connect(
  (state) => ({currentBasket: state.basket.currentBasket}),
  {BasketAdd,BasketPickup}
)(MainInput)