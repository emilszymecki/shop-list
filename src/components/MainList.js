import React, { Component } from "react";
import { connect } from "react-redux";
import MainListElement from "./MainListElement";
import MainListElementColor from "./MainListElementColor";

const R = require('ramda');

const MainList = (props) =>  {

		const Categories = props.filters.Categories
		const CategoriesTest = !R.isEmpty(Categories)

		const Colors = props.filters.Colors
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

		const newState = R.pipe(CategoriesFilter,ColorsFilter)(props.products)

		console.log(newState)
		return (
			<div>
				{JSON.stringify(newState)}
				{newState.map( ({type:name, attr}) => {
					const pair = R.zip(R.keys(attr),R.values(attr));
						return (
						<React.Fragment key={name}>
								<MainListElement name={name}>
									<MainListElementColor color={pair}/>
								</MainListElement>
						</React.Fragment>
						)
				}

					)}
			</div>
		);
}

export default connect(state => ({ products: state.basket.products, filters:state.basket.currentFilter }))(
	MainList
);