import { Button, Color, Margin, Text, Select } from '@wm/design'

const options = [
	{
		label: 'jebong',
		value: 'jabong'
	},
	{
		label: 'hosu',
		value: 'hosu'
	},
	{
		label: 'changyu',
		value: 'changyu'
	}
]

const App = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<Button>App</Button>
			<Color hexCode="#333" width="lg" height="lg" />
			<Select options={options} />
		</div>
	)
}

export default App
