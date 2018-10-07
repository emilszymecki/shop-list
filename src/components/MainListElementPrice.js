import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'

const MainListElementPrice = ({price}) => {
		return(
				<Header as="h3">Cena: {price}</Header>
			)
}

export default MainListElementPrice