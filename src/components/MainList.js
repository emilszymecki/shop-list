import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductsFilter } from "../reducers/basket";
import MainListElement from "./MainListElement";
import MainListElementColor from "./MainListElementColor";
import {notEmpty,objIsEmpty} from '../helpers/filters'

const R = require("ramda");


const MainList = props => {
	const ProductElement = props.products.map(({ type: name, attr }) => {
		const pair = notEmpty(attr);
		const ColorsisNotEmpty = objIsEmpty(attr);

		return (
			!ColorsisNotEmpty && (
				<React.Fragment key={name}>
					<MainListElement name={name} color={pair} />
				</React.Fragment>
			)
		);
	});

	return (
		<div>
			{JSON.stringify(props.products)}
			{ProductElement}
		</div>
	);
};

export default connect(
	state => ({ products: state.basket.productsFiltered }),
	{ ProductsFilter }
)(MainList);