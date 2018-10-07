import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'

const MainListElementSelect = ({name,selectColor}) => {
		return(
				<Header as="h3">Wybrano: {name} {selectColor}</Header>
			)
}

export default MainListElementSelect