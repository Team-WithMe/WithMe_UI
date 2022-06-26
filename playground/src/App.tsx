import { Button, Card, Input } from '@with-me/design'
import { ChangeEvent, useState } from 'react'
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
	const [value, setValue] = useState('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)

	const onClick = () => setError(prev => !prev)

	return (
		<Container>
			<Button fullSize>testseet</Button>
			<Button onClick={onClick}>teste</Button>
			<Input value={value} onChange={onChange} error={error} />
			{value}
			<Card border="primary" hover>
				test
			</Card>
			<Card hover border="deep-gray" onClick={() => console.log('test')}>
				test
			</Card>
			<Card border="greyish">test</Card>
			<Card border="light-gray">test</Card>
			<Card border="no-border">test</Card>
		</Container>
	)
}

export default App
