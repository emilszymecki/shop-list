import React, { Component } from "react";
import { connect } from "react-redux";
import MainListElement from "./MainListElement";
class MainList extends Component {
	render() {
		return (
			<div>
				{this.props.pickupBasket.length == 0?<h1>Lista jest pusta</h1>: 
					this.props.pickupBasket.map(el => {
						return (
							<div key={el}>
								<MainListElement name={el}/>
							</div>
						);
					})}
			</div>
		);
	}
}

export default connect(state => ({ pickupBasket: state.basket.pickupBasket }))(
	MainList
);