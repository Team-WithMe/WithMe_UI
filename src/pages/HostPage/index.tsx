import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from '@components/common/Logo'
import ProgressBar from '@components/host/ProgressBar'
import { checkModalData, hostLink, hostTitle } from '@lib/data/staticData'
import {
	HostMoveButton,
	HostPageContainer,
	HostWrapper
} from '@pages/HostPage/styles'
import HostRouterConfig from '@routes/HostRouterConfig'
import { HostButtonType, HostPageNameType } from '@typings/host'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import {
	hostDescriptionState,
	hostGoalState,
	hostNameState,
	hostSkillsState,
	nextStepValidState
} from '@lib/atom/host'
import useModal from '@hooks/useModal'
import CheckModal from '@components/modal/CheckModal'

const HostPage = () => {
	const { pathname } = useLocation() as { pathname: HostPageNameType }
	const navigate = useNavigate()

	//* button valid
	const nextStepValid = useRecoilValue(nextStepValidState)

	//* clear host state
	const clearGoal = useResetRecoilState(hostGoalState)
	const clearSkills = useResetRecoilState(hostSkillsState)
	const clearName = useResetRecoilState(hostNameState)
	const clearDescription = useResetRecoilState(hostDescriptionState)

	const onToMainPage = () => {
		clearGoal()
		clearSkills()
		clearName()
		clearDescription()
		navigate('/')
	}

	//* modal control
	const { onModalEvent, ModalPortal } = useModal()
	const onOpenModal = useCallback(() => onModalEvent(true)(), [onModalEvent])

	//* router pathname 마다 분기처리해서 데이터 가공
	const routerData = useMemo(
		() => ({
			'/host/goal': { title: hostTitle[0], per: 20, to: hostLink[0] },
			'/host/skils': { title: hostTitle[1], per: 40, to: hostLink[1] },
			'/host/name': { title: hostTitle[2], per: 60, to: hostLink[2] },
			'/host/description': { title: hostTitle[3], per: 80, to: hostLink[3] },
			'/host/success': { title: hostTitle[4], per: 100, to: hostLink[4] }
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
		(type: HostButtonType) => () => {
			const path = routerData[pathname].to[type]
			path === 'openModal' //* 모달창 여부 분기처리
				? onOpenModal()
				: navigate(routerData[pathname].to[type])
		},
		[navigate, onOpenModal, pathname, routerData]
	)

	return (
		<HostPageContainer>
			<Logo />
			<h2>{routerData[pathname]?.title}</h2>
			<ProgressBar percent={routerData[pathname]?.per} />
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
					disabled={!nextStepValid}
				>
					{buttonText('next')}
				</HostMoveButton>
			</div>
			<ModalPortal>
				<CheckModal
					title={checkModalData.title}
					description={checkModalData.description}
					onToMainPage={onToMainPage}
					onCloseModal={onModalEvent(false)}
				/>
			</ModalPortal>
		</HostPageContainer>
	)
}

export default HostPage
