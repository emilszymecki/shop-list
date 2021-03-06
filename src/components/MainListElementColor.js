import React, {Component} from 'react'
import { List } from 'semantic-ui-react'
const R = require('ramda');

const MainListElementColor = ({color,name,selectColor,onClick}) => {
		
		const colorsList = R.keys(color)
		const renderListColor = colorsList.map(el => {
									const selectedColorOnList = R.equals(el,selectColor)
									return (<List.Item key={name+el}><a href="" onClick={onClick} className={`list ${selectedColorOnList ? 'checked' : 'unchecked'}`}>{el}</a></List.Item>)
								})
		return(
				<List horizontal>
					{renderListColor}	
				</List>
				
			)
}

export default MainListElementColor