import React, {Component} from 'react'
const R = require('ramda');

const MainListElementColor = ({color,name,selectColor,onClick}) => {
		
		const colorsList = R.keys(color)
		const renderListColor = colorsList.map(el => {
									const selectedColorOnList = R.equals(el,selectColor)
									return (<li key={name+el} className={`list ${selectedColorOnList ? 'checked' : 'unchecked'}`}><a href="" onClick={onClick}>{el}</a></li>)
								})
		return(
				<ul>{renderListColor}</ul>
			)
}

export default MainListElementColor