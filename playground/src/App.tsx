import styled from 'styled-components'
import { Card, Row, Col, Avatar, Divider } from '@with-me/design'

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
			<Avatar
				src="https://avatars.githubusercontent.com/u/80776262?v=4"
				size="large"
				cursor
				shape="circle"
			>
				박제봉
			</Avatar>
			<Avatar cursor shape="circle" size={50}>
				박제봉
			</Avatar>
			<Avatar shape="square">박제봉</Avatar>
			<br />
			<Divider color="deep-gray" />
			<br />
			<Divider color="greyish" />
			<br />
			<Divider color="light-gray" />
			<br />
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
		</Container>
	)
}

export default App
