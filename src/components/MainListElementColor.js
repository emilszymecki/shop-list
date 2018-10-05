import React, {Component} from 'react'
const R = require('ramda');
const MainListElementColor = ({color,name,onClick}) => {
		//console.log(color)
		const colorsList = R.keys(color)
		const renderListColor = colorsList.map(el => {
									return (<li key={name+el}><a href="" onClick={onClick}>{el}</a></li>)
								})
		return(
				<ul>{renderListColor}</ul>
			)
}

export default MainListElementColor