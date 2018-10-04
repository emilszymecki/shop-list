import React, {Component} from 'react'

const MainListElementColor = ({color,children}) => {
		const colors = color.map(x =>  {
			return (<a href="#">
							{x[0]}
						</a>)
		})
		return(
				<h1>{colors}</h1>
			)
}

export default MainListElementColor