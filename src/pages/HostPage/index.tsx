import { useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from '@components/common/Logo'
import ProgressBar from '@components/host/ProgressBar'
import { hostLink, hostTitle } from '@lib/data/staticData'
import {
	HostMoveButton,
	HostPageContainer,
	HostWrapper
} from '@pages/HostPage/styles'
import HostRouterConfig from '@routes/HostRouterConfig'
import { HostButtonType, HostPageNameType } from '@typings/host'

const HostPage = () => {
	const { pathname } = useLocation() as { pathname: HostPageNameType }
	const navigate = useNavigate()

	//* recoil로 교체
	const [nextStepValid] = useState(false)

	//* router pathname 마다 분기처리해서 데이터 가공
	const routerData = useMemo(
		() => ({
			'/host/goal': { title: hostTitle[0], percent: 20, to: hostLink[0] },
			'/host/skils': { title: hostTitle[1], percent: 40, to: hostLink[1] },
			'/host/name': { title: hostTitle[2], percent: 60, to: hostLink[2] },
			'/host/description': {
				title: hostTitle[3],
				percent: 80,
				to: hostLink[3]
			},
			'/host/success': { title: hostTitle[4], percent: 100, to: hostLink[4] }
		}),
		[]
	)

	//* step 마다 버튼 내용 분기처리
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

	//* 해당 버튼에 이동할 경로를 정해주고 이동
	const onToMovePage = useCallback(
		(type: HostButtonType) => () => navigate(routerData[pathname].to[type]),
		[navigate, pathname, routerData]
	)

	return (
		<HostPageContainer>
			<Logo />
			<h2>{routerData[pathname]?.title}</h2>
			<ProgressBar percent={routerData[pathname]?.percent} />
			<HostWrapper>
				<HostRouterConfig />
			</HostWrapper>
			<div className="button_group">
				<HostMoveButton btnType="prev" onClick={onToMovePage('prev')}>
					{buttonText('prev')}
				</HostMoveButton>
				<HostMoveButton
					btnType="next"
					onClick={onToMovePage('next')}
					disabled={nextStepValid}
				>
					{buttonText('next')}
				</HostMoveButton>
			</div>
		</HostPageContainer>
	)
}

export default HostPage
