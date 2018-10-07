import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductsFilter } from "../reducers/basket";
import MainListElement from "./MainListElement";
import MainListElementColor from "./MainListElementColor";
import {notEmpty,objIsEmpty} from '../helpers/filters'
import { Card } from 'semantic-ui-react'

const R = require("ramda");


const MainList = props => {
	const ProductElement = props.products.map(({ type: name, attr }) => {
		const pair = notEmpty(attr);
		const ColorsisNotEmpty = objIsEmpty(attr);

		return (
			!ColorsisNotEmpty && (
				<Card key={name} >
					<Card.Content>
						<MainListElement name={name} color={pair} />
					</Card.Content>	
				</Card>
				
			)
		);
	});

	return (
		<Card.Group itemsPerRow={2}>
			{/*JSON.stringify(props.products)*/}
			{ProductElement}
		</Card.Group>
	);
};

export default connect(
	state => ({ products: state.basket.productsFiltered }),
	{ ProductsFilter }
)(MainList);