import React, { useMemo } from 'react'

export const decorators = [
	Story => {
		const styled = useMemo(
			() => ({ display: 'flex', alignItems: 'center', gap: '15px' }),
			[]
		)

		return (
			<div style={styled}>
				<Story />
			</div>
		)
	}
]
