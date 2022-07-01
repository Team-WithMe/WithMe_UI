import styled from 'styled-components'
import { Card, Row, Col, Avatar, Divider, Button } from '@with-me/design'

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
	return (
		<Container>
			<MyButton>test</MyButton>
		</Container>
	)
}

export default App
