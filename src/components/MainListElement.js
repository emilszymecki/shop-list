import React, {Component} from 'react'
const R = require('ramda');

const selectRandom = (arr) => {
	return arr[Math.floor(Math.random()*arr.length)]
}

class MainListElement extends Component {
		state = {
			name:"",
			selectedColor:""
		}

		componentDidMount(){
			this.setState({name:this.props.name, selectedColor:selectRandom(R.keys(this.props.color))})
		}

		

		render(){
			const {name,selectedColor}= this.state
			return(
			<React.Fragment>
				<h1>{name +" "+ selectedColor}</h1>
				{this.props.children}
			</React.Fragment>
			);
		}
}

export default MainListElement