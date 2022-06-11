import { Button, Color, Margin, Text } from '@wm/design'

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
			<Margin left space="lg">
				<Text size="xxl">test</Text>
			</Margin>
			<Text size="sm">test</Text>
		</div>
	)
}

export default App
