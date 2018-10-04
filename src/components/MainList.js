import React, { Component } from "react";
import { connect } from "react-redux";
import MainListElement from "./MainListElement";

const R = require('ramda');

const MainList = (props) =>  {

		const Categories = props.filters.Categories
		const CategoriesTest = !R.isEmpty(Categories)

		const Colors = props.filters.Colors
		const ColorsTest = !R.isEmpty(Colors)


		const test = (state) => {
				if(CategoriesTest){
					return R.filter( el => Categories.indexOf(el.type) != -1,state)
				}else{
					return state
				}
		}

		console.log(test(props.products))
		return (
			<div>
				{JSON.stringify(props.products)}
			</div>
		);
}

export default connect(state => ({ products: state.basket.products, filters:state.basket.currentFilter }))(
	MainList
);