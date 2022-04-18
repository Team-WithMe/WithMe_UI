import { FC, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import Logo from '@components/common/Logo'
import ProgressBar from '@components/host/ProgressBar'
import Button from '@components/common/Button'
import { hostLink, hostTitle } from '@lib/staticData'
import { ReactProps } from '@typings/common'
import { HostPageNameType } from '@typings/hostpage'

type ButtonType = 'prev' | 'next'

const Container = styled.div`
	width: 80%;
	max-width: 812px;
	margin: auto;
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.big};
		font-weight: 500;
	}
	.button_group {
		width: 100%;
		display: flex;
		gap: 15px;
	}
`

const HostBox = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 5px;
	border: ${({ theme }) => theme.colors.lineColor};
`

const MoveButton = styled(Button)<{ btnType: ButtonType }>`
	width: 100%;
	background-color: ${({ btnType, theme }) =>
		btnType === 'prev' ? theme.colors.gray_ee : theme.colors.primary};
	color: ${({ btnType }) => (btnType === 'prev' ? '#333' : 'white')};
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 500;
`

const HostLayout: FC<ReactProps> = ({ children }) => {
	const { pathname } = useLocation() as { pathname: HostPageNameType }
	const navigate = useNavigate()

	const routerData = useCallback(() => {
		switch (pathname) {
			case '/host/goal':
				return { title: hostTitle[0], percent: 20, to: hostLink[0] }
			case '/host/skils':
				return { title: hostTitle[1], percent: 40, to: hostLink[1] }
			case '/host/name':
				return { title: hostTitle[2], percent: 60, to: hostLink[2] }
			case '/host/description':
				return { title: hostTitle[3], percent: 80, to: hostLink[3] }
			case '/host/success':
				return { title: hostTitle[4], percent: 100, to: hostLink[4] }
			default:
				return { title: '404 Not Found', percent: 0, to: hostLink[5] }
		}
	}, [pathname])()

	const buttonText = useCallback(
		(isType: ButtonType) => {
			const isPrev = isType === 'prev'
			const test = pathname !== '/host/goal' && pathname !== '/host/success'
			return test
				? `${isPrev ? '전 단계' : '다음 단계'}로 돌아가기`
				: pathname === '/host/goal'
				? `${isPrev ? '홈으' : '다음 단계'}로 돌아가기`
				: `${isPrev ? '팀 페이지로 이동하기' : '모집중인 팀 등록하기'}`
		},
		[pathname]
	)

	console.log(pathname, pathname !== `/host/${'init' || 'success'}`)

	const onToMovePage = useCallback(
		(type: ButtonType) => () => navigate(routerData.to[type]),
		[navigate, routerData.to]
	)

	return (
		<Container>
			<Logo />
			<h2>{routerData.title}</h2>
			<ProgressBar percent={routerData.percent} />
			<HostBox>{children}</HostBox>
			<div className="button_group">
				<MoveButton btnType="prev" onClick={onToMovePage('prev')}>
					{buttonText('prev')}
				</MoveButton>
				<MoveButton btnType="next" onClick={onToMovePage('next')}>
					{buttonText('next')}
				</MoveButton>
			</div>
		</Container>
	)
}

export default HostLayout
