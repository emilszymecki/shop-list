import React, {Component} from 'react'
const R = require('ramda');
const MainListElementColor = ({color}) => {
		//console.log(color)
		const colorsList = R.keys(color)
		const renderListColor = colorsList.map(el => {
									return (<h3>{el}</h3>)
								})
		return(
				<div>{renderListColor}</div>
			)
}

export default MainListElementColor