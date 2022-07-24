import React, { useMemo } from 'react'
import { themes } from '@storybook/theming'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		theme: themes.normal
	},
	previewTabs: {
		canvas: {
			hidden: true
		},
		docs: {
			hidden: false
		}
	},
	viewMode: 'docs'
}

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
