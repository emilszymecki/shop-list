import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { FilterAdd } from "../reducers/basket";
import DropdownExampleMultipleSelection from "./DropDown";

const colors = [
	{ key: "czarny", text: "czarny", value: "czarny" },
	{ key: "czerwony", text: "czerwony", value: "czerwony" },
	{ key: "zielony", text: "zielony", value: "zielony" },
	{ key: "żółty", text: "żółty", value: "żółty" },
	{ key: "niebieski", text: "niebieski", value: "niebieski" },
	{ key: "biały", text: "biały", value: "biały" }
];

const category = [
	{ key: "kwadrat", text: "kwadrat", value: "kwadrat" },
	{ key: "koło", text: "koło", value: "koło" },
	{ key: "trójkąt", text: "trójkąt", value: "trójkąt" },
	{ key: "prostokąt", text: "prostokąt", value: "prostokąt" },
	{ key: "gwiazdka", text: "gwiazdka", value: "gwiazdka" }
];

const ColorFilter = DropdownExampleMultipleSelection("Colors")(colors);
const CategoryFilter = DropdownExampleMultipleSelection("Categories")(category);

class MainInput extends Component {
	handleInputChange = (evt, data) => {
		evt.preventDefault();

		const name = data.placeholder;

		this.props.FilterAdd({
			[name]: data.value
		});
	};

	render() {
		return (
			<React.Fragment>
				<Label name={"Color"}>
					<ColorFilter onChange={this.handleInputChange} />
				</Label>
				<Label name={"Category"}>
					<CategoryFilter onChange={this.handleInputChange} />
				</Label>
			</React.Fragment>
		);
	}
}

const Label = ({ name, children }) => {
	return (
		<React.Fragment>
			<h1>{name}</h1>
			{children}
		</React.Fragment>
	);
};

export default connect(
	state => ({ currentBasket: state.basket.currentBasket }),
	{ FilterAdd }
)(MainInput);