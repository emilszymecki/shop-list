import React, { Component } from "react";
import MainListElementColor from "./MainListElementColor";
import MainListElementPrice from "./MainListElementPrice";
import MainListElementSelect from "./MainListElementSelect";
import { Header } from 'semantic-ui-react'
const R = require("ramda");

const selectRandom = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};

class MainListElement extends Component {
	state = {
		selectColor: "",
		price: ""
	};

	componentDidMount() {
		const { keys, randomColor, price } = this.getData();

		this.setState({ selectColor: randomColor, price: price });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const { keys, randomColor, price } = this.getData();

		console.log(prevState, keys);
		if (keys.indexOf(prevState.selectColor) == -1) {
			this.setState({ selectColor: randomColor, price: price });
		}
	}

	getData = () => {
		const keys = R.keys(this.props.color);
		const randomColor = selectRandom(keys);
		const price = this.props.color[randomColor].cena;
		return {
			keys: keys,
			randomColor: randomColor,
			price: price
		};
	};

	handleInputChange = evt => {
		evt.preventDefault();

		const text = evt.target.text;
		const price = this.props.color[text].cena;

		this.setState({
			selectColor: text,
			price: price
		});
	};

	render() {
		return (
			<React.Fragment>
				<Header as="h2">
					Kategoria:
					{this.props.name}
				</Header>
				<MainListElementSelect name={this.props.name} selectColor={this.state.selectColor}/>
				<MainListElementColor
					selectColor={this.state.selectColor}
					onClick={this.handleInputChange}
					name={this.props.name}
					color={this.props.color}
				/>
				<MainListElementPrice
					price={this.state.price}
				/>
			</React.Fragment>
		);
	}
}

export default MainListElement;