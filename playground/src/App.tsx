import { Button, Margin, Text } from '@with-me/design'
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
			<Group>
				<Button bgColor="primary">App</Button>
				<Button bgColor="secondary">App</Button>
				<Button bgColor="danger">App</Button>
				<Button bgColor="default">App</Button>
				<Button bgColor="greyish">App</Button>
			</Group>
			<Group>
				<Button shadow bgColor="primary">
					App
				</Button>
				<Button shadow bgColor="secondary">
					App
				</Button>
				<Button shadow bgColor="danger">
					App
				</Button>
				<Button shadow bgColor="default">
					App
				</Button>
				<Button shadow bgColor="greyish">
					App
				</Button>
			</Group>
			<Button bgColor="dark" fullSize Icon={<GithubIcon />}>
				test
			</Button>
		</Container>
	)
}

export default App
