import React, {Component} from 'react'
import MainListElementColor from "./MainListElementColor";
const R = require('ramda');

const selectRandom = (arr) => {
	return arr[Math.floor(Math.random()*arr.length)]
}

class MainListElement extends Component{

			state = {
				selectColor:'',
				price:''
			}

			componentDidMount(){
				const keys = R.keys(this.props.color);
				const randomColor = selectRandom(keys);
				const price = this.props.color[randomColor].cena

				this.setState({selectColor:randomColor,price:price})
			}

			componentDidUpdate(prevProps, prevState, snapshot){
				const keys = R.keys(this.props.color);
				const randomColor = selectRandom(keys);
				const price = this.props.color[randomColor].cena

				console.log(prevState,keys)
				if(keys.indexOf(prevState.selectColor) == -1){
					this.setState({selectColor:randomColor,price:price})
				}
			}

			handleInputChange = (evt) => {
				evt.preventDefault();

				const text = evt.target.text
				const price = this.props.color[text].cena

				this.setState({
					selectColor:text,
					price:price
				})
				
			};

			render(){
			return(
				<React.Fragment>
					<h1>Kategoria:{this.props.name}</h1>
					<h2>Wybrano:{this.props.name} {this.state.selectColor}</h2>
					<MainListElementColor onClick={this.handleInputChange} name={this.props.name} color={this.props.color}/>
					<h3>Cena:{this.state.price}</h3>
				</React.Fragment>
			);
			}
}

export default MainListElement