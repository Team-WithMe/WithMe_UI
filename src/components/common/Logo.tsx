import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { ReactComponent } from '@assets/svg/logo_icon.svg'

const Container = styled.div`
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
	a {
		display: flex;
		align-items: center;
		gap: 8px;
		span {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

const LogoIcon = styled(ReactComponent)`
	fill: ${({ theme }) => theme.colors.primary};
`

const Logo = () => (
	<Container>
		<Link to="/">
			<LogoIcon width="35" height="35" />
			<span>It&apos;s</span>
		</Link>
	</Container>
)

export default Logo
