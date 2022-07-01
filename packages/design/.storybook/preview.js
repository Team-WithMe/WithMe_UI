import React, { useMemo } from 'react'

export const decorators = [
	Story => {
		const styled = useMemo(
			() => ({
				width: 'auto',
				display: 'flex',
				gap: '15px'
			}),
			[]
		)

		return (
			<div style={styled}>
				<Story />
			</div>
		)
	}
]
