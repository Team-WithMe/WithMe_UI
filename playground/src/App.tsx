import { Button, Text, Title } from '@with-me/design'
import styled from 'styled-components'
import GithubIcon from './GithubIcon'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`

const Group = styled.div`
	display: flex;
	gap: 10px;
`

const App = () => {
	return (
		<Container>
			<Title size="large" color="danger" weight="thin">
				Title
			</Title>
			<Title size="middle" color="primary" weight="medium">
				Title
			</Title>
			<Title size="small" color="success" weight="bold">
				Title
			</Title>
		</Container>
	)
}

export default App
