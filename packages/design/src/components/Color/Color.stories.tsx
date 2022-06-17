import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Color from './Color'

export default {
	title: 'Color',
	component: Color
} as ComponentMeta<typeof Color>

const Template: ComponentStory<typeof Color> = args => <Color {...args} />

export const Default = Template.bind({})
Default.args = {
	hexCode: 'hotpink',
	width: 'md'
}
