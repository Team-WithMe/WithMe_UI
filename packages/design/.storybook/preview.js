import React, { useMemo } from 'react'

export const decorators = [
	Story => {
		const styled = useMemo(() => ({ display: 'flex', gap: '10px' }), [])

		return (
			<div style={styled}>
				<Story />
			</div>
		)
	}
]
