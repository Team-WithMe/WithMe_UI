import { Button, Color } from '@wm/design'

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
		</div>
	)
}

export default App
