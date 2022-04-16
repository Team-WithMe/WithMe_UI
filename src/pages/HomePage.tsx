import styled from '@emotion/styled'

import previewImg from '@assets/images/main_preview.png'
import Intro from '@components/home/Intro'
import Score from '@components/home/Score'
import AppLayout from '@layouts/AppLayout'

const Container = styled.div`
	padding: 200px 0;
	display: flex;
	flex-direction: column;
	gap: 150px;
`

const HomePage = () => (
	<AppLayout>
		<Container>
			<Intro />
			<img src={previewImg} alt="previewImg" />
			<Score />
		</Container>
	</AppLayout>
)

export default HomePage
