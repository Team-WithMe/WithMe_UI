import { Button, Input, Text, Title } from '@with-me/design'
import styled from 'styled-components'
import GithubIcon from './GithubIcon'

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

const Group = styled.div`
	display: flex;
	gap: 10px;
`

const App = () => {
	return (
		<Container>
			<Input prefix={<GithubIcon />} size="large" password />
			<Input size="middle" suffix={'test'} />
			<Input size="small" />
		</Container>
	)
}

export default App
