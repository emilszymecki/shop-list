import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductsFilter } from "../reducers/basket";
import MainListElement from "./MainListElement";
import MainListElementColor from "./MainListElementColor";

const R = require('ramda');

const MainList = (props) =>  {

		return (
			<div>
				{JSON.stringify(props.products)}
				{props.products.map( ({type:name, attr}) => {
					const pair = R.filter(R.compose(R.not,R.isNil),attr);
					const testColorsisNotEmpty= R.compose(R.all(R.equals(undefined)),R.values)(attr)

						return (
						!testColorsisNotEmpty &&	
						<React.Fragment key={name}>
								<MainListElement name={name} color={pair}/>

						</React.Fragment>
						)
				}

					)}
			</div>
		);
}

export default connect(state => ({ products: state.basket.productsFiltered}),{ProductsFilter})(
	MainList
);