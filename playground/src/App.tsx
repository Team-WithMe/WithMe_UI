import styled from 'styled-components'
import { Card, Row, Col } from '@with-me/design'

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

const App = () => {
	return (
		<Container>
			<Row gutter={[12, 60]}>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card>1</Card>
						</Col>

						<Col xl={12}>
							<Card>1</Card>
						</Col>

						<Col xl={12}>
							<Card>1</Card>
						</Col>
					</Row>

					<Card hover>1</Card>
				</Col>
				<Col xl={6}>
					<Card hover>1</Card>
				</Col>
				<Col xl={6}>
					<Card hover>1</Card>
				</Col>
				<Col xl={6}>
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
