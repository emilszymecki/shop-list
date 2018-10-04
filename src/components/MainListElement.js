import React, {Component} from 'react'


const MainListElement = ({name,children}) => {
		return(
			<React.Fragment>
				<h1>{name}</h1>
				{children}
			</React.Fragment>
			)
}

export default MainListElement