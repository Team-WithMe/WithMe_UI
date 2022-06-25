import { Button, Text } from '@with-me/design'
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
			<Text size="xxxl" color="danger" weight="bold">
				test
			</Text>
			<Text size="xxxl" color="deep-gray" weight="light">
				test
			</Text>
			<Text size="xxxl" color="greyish" weight="medium">
				test
			</Text>
			<Text size="xxxl" color="light-gray" weight="regular">
				test
			</Text>
			<Text size="xxxl" color="primary" weight="thin">
				test
			</Text>
			<Text size="xxxl" color="secondary">
				test
			</Text>
			<Text size="xxxl" color="success">
				test
			</Text>
			<Text size="xxxl" color="white">
				test
			</Text>
		</Container>
	)
}

export default App
