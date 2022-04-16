import { Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

import Logo from '@components/common/Logo'
import Button from '@components/common/Button'
import { navMenus } from '@lib/staticData'

const Container = styled.header`
	width: 100%;
	padding: 25px 14.5%;
	background-color: white;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lineColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.menus__item {
		display: flex;
		gap: 25px;
	}
`

const Menu = styled(Link)<{ matching: string | null }>`
	font-size: ${({ theme }) => theme.fontSizes.lg};
	color: ${({ theme, matching }) =>
		matching ? theme.colors.primary : theme.colors.gray_77};
	font-weight: 500;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
`

const Header = () => {
	const { pathname } = useLocation()

	return (
		<Container>
			<Logo />
			<div className="menus__item">
				{navMenus.map(menu => (
					<Menu
						key={menu.id}
						to={menu.to}
						matching={pathname === menu.to ? 'isTrue' : null}
					>
						{menu.name}
					</Menu>
				))}
			</div>
			<Button bgColor="primary" fontSize="lg">
				로그인 | 회원가입
			</Button>
		</Container>
	)
}

export default Header
