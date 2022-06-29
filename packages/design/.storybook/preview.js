import React, { useMemo } from 'react'

{
	/* <Meta title="components/Grid" component={Row} /> */
}

export const decorators = [
	Story => {
		const styled = useMemo(
			() => ({
				width: 'auto',
				display: 'flex',
				alignItems: 'center',
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
