import styled from 'styled-components'
import {
	Card,
	Row,
	Col,
	Avatar,
	Divider,
	Button,
	Textarea
} from '@with-me/design'
import { useState } from 'react'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	width: 80%;
	margin: auto;
	height: 100vh;
`

const MyButton = styled(Button)`
	width: 300px;
`

const App = () => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

	return (
		<Container>
			<MyButton onClick={() => setError(prev => !prev)}>test</MyButton>
			<Card title={<h1>test</h1>}>
				<span>test1</span>
			</Card>
		</Container>
	)
}

export default App
