import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Container, Header } from "semantic-ui-react";
import { FilterAdd,ProductsFilter } from "../reducers/basket";
import DropdownExampleMultipleSelection from "./DropDown";
import {colors,category} from '../helpers/filters'

const R = require('ramda');

const ColorFilter = DropdownExampleMultipleSelection("Colors")(colors);
const CategoryFilter = DropdownExampleMultipleSelection("Categories")(category);

class MainInput extends Component {

	 handleInputChange = (evt, data) => {
		evt.preventDefault();

		const name = data.placeholder;
		const value = data.value

		this.props.FilterAdd({
			[name]: data.value
		});
		
	};

	componentDidMount(){
		this.props.ProductsFilter(this.props.products)
	}

	componentDidUpdate(){
		
		const Categories = this.props.filters.Categories
		const CategoriesTest = !R.isEmpty(Categories)

		const Colors = this.props.filters.Colors
		const ColorsTest = !R.isEmpty(Colors)


		const CategoriesFilter = (state) => {
				if(CategoriesTest){
					return R.filter( el => Categories.indexOf(el.type) != -1,state)
				}else{
					return state
				}
		}

		const ColorsFilter = (state) => {
				if(ColorsTest){
					return R.map(x => R.assoc('attr',R.pickAll(Colors,R.prop("attr",x)),x),state)
				}else{
					return state
				}
		}

		const newState = R.pipe(CategoriesFilter,ColorsFilter)(this.props.products)
		this.props.ProductsFilter(newState)
	}

		render(){
			return (
			<React.Fragment>
				<Label name={"Kolor"}>
					<ColorFilter onChange={this.handleInputChange} />
				</Label>
				<Label name={"Kategoria"}>
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
	state => ({ products: state.basket.products, filters: state.basket.currentFilter }),
	{FilterAdd,ProductsFilter}
)(MainInput);