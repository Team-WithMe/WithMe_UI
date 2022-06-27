import React, { FC, useContext } from 'react'
import GridContext from './GridContext'

interface ColProps {
	span?: number
}

const Col: FC<ColProps> = ({ span }) => {
	const { gutter, wrap } = useContext(GridContext)
	console.log(gutter, wrap)

	return <div>Col</div>
}

export default Col
