import { HeaderContainer } from '@components/common/Header/styles'
import Logo from '@components/common/Logo'
import { Link } from 'react-router-dom'

const menus = [
	{ id: 1, name: '팀 찾기', to: '/list' },
	{ id: 2, name: '커뮤니티', to: '/community' }
]

const Header = () => (
	<HeaderContainer>
		<Logo />
		<div className="menus__item">
			{menus.map(menu => (
				<Link key={menu.id} to={menu.to}>
					{menu.name}
				</Link>
			))}
		</div>
		<button>로그인 | 회원가입</button>
	</HeaderContainer>
)

export default Header
