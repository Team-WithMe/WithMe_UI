import { Button, Card, Input, Row, Col } from '@with-me/design'
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
			<Row gutter={[12, 6]}>
				<Col>
					<Card hover>1</Card>
				</Col>
				<Col>
					<Card hover>1</Card>
				</Col>
				<Col>
					<Card hover>1</Card>
				</Col>
				<Col>
					<Card hover>1</Card>
				</Col>
			</Row>

			<br />
			<br />
			<br />

			<Row>
				<Col xl={8} lg={6} md={4} sm={2} xs={12}>
					<Card hover>1</Card>
				</Col>
				<Col xl={4} lg={6} md={8} sm={10} xs={12}>
					<Card hover>1</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default App
