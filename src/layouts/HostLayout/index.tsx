import { FC, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from '@components/common/Logo'
import ProgressBar from '@components/host/ProgressBar'
import {
	HostBox,
	HostLayoutContainer,
	HostMoveButton
} from '@layouts/HostLayout/styles'
import { hostLink, hostTitle } from '@lib/staticData'
import { ReactProps } from '@typings/common'
import { HostButtonType, HostPageNameType } from '@typings/hostpage'

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
		(isType: HostButtonType) => {
			const isPrev = isType === 'prev'
			const isNotGoalAndSuccess =
				pathname !== '/host/goal' && pathname !== '/host/success'
			return isNotGoalAndSuccess
				? `${isPrev ? '전 단계로 돌아가기' : '다음 단계로 넘어가기'}`
				: pathname === '/host/goal'
				? `${isPrev ? '홈으로 돌아가기' : '다음 단계로 넘어가기'}`
				: `${isPrev ? '팀 페이지로 이동하기' : '모집중인 팀 등록하기'}`
		},
		[pathname]
	)

	const onToMovePage = useCallback(
		(type: HostButtonType) => () => navigate(routerData.to[type]),
		[navigate, routerData.to]
	)

	return (
		<HostLayoutContainer>
			<Logo />
			<h2>{routerData.title}</h2>
			<ProgressBar percent={routerData.percent} />
			<HostBox>{children}</HostBox>
			<div className="button_group">
				<HostMoveButton btnType="prev" onClick={onToMovePage('prev')}>
					{buttonText('prev')}
				</HostMoveButton>
				<HostMoveButton btnType="next" onClick={onToMovePage('next')}>
					{buttonText('next')}
				</HostMoveButton>
			</div>
		</HostLayoutContainer>
	)
}

export default HostLayout
