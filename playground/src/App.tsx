import { Button, Input } from '@with-me/design'
import { useState } from 'react'
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
	const [error, setError] = useState(false)

	const onClick = () => setError(prev => !prev)

	return (
		<Container>
			<Button fullSize>testseet</Button>
			<Button onClick={onClick}>teste</Button>
			<Input prefix={<span>test</span>} size="large" password />
			<Input size="middle" suffix={'test'} error={error} />
			<Input size="small" />
		</Container>
	)
}

export default App
