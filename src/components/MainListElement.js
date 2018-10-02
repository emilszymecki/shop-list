import React, {Component} from 'react'
import {connect} from 'react-redux'

const MainListElement = ({name}) => {
		return(
				<h1>{name}</h1>
			)
}

export default MainListElement