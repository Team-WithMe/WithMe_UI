import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

interface AppLayoutProps {
	children?: ReactNode
}

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.bgColor};
	.layout__body {
		padding: 0 14.5%;
	}
`

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
	<Container>
		<Header />
		<div className="layout__body">{children}</div>
		<Footer />
	</Container>
)

export default AppLayout
