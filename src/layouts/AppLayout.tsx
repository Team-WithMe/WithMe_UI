import { FC } from 'react'
import styled from '@emotion/styled'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import { ReactProps } from '@typings/common'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.bgColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	.layout__body {
		padding: 0 14.5%;
	}
`

const AppLayout: FC<ReactProps> = ({ children }) => (
	<Container>
		<Header />
		<div className="layout__body">{children}</div>
		<Footer />
	</Container>
)

export default AppLayout
