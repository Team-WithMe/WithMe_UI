import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from '@emotion/styled'

import selectImg1 from '@assets/images/team_select_1.png'
import selectImg2 from '@assets/images/team_select_2.png'
import HostBox from '@components/host/HostBox'
import SelectBox from '@components/host/SelectBox'
import { hostGoalState, nextStepValidState } from '@lib/atom/host'
import { HostGoalDataType } from '@typings/host'
import { useEffect } from 'react'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`

const TeamGoal = () => {
	const [isGoal, setIsGoal] = useRecoilState(hostGoalState)
	const setIsNextStepValid = useSetRecoilState(nextStepValidState)

	useEffect(() => {
		setIsNextStepValid(true)
	}, [setIsNextStepValid])

	const onCangeIsGoal = (goal: HostGoalDataType) => () => setIsGoal(goal)

	return (
		<HostBox
			title="📕 팀의 목적을 선택해주세요!"
			subTitle="클릭해서 선택해주세요!"
		>
			<Wrapper>
				<SelectBox
					active={isGoal === 'project'}
					imgSrc={selectImg1}
					title="팀 프로젝트"
					description="같이 서비스를 만들 팀원을 구해보세요!"
					onCangeIsGoal={onCangeIsGoal('project')}
				/>
				<SelectBox
					active={isGoal === 'study'}
					imgSrc={selectImg2}
					title="스터디"
					description="함께 성장할 팀원을 모아보세요!"
					onCangeIsGoal={onCangeIsGoal('study')}
				/>
			</Wrapper>
		</HostBox>
	)
}

export default TeamGoal
