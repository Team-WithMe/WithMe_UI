import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import Input from '@components/common/Input'
import { hostNameState, nextStepValidState } from '@lib/atom/host'
import { TeamNameInputContainer } from './styles'

const TeamNameInput = () => {
	const [teamName, setTeamName] = useRecoilState(hostNameState)
	const nextStepValid = useSetRecoilState(nextStepValidState)

	const [isValid, setIsValid] = useState(false)

	const teamNameVaild = useCallback(
		(valid: boolean) => {
			nextStepValid(valid)
			setIsValid(valid)
		},
		[nextStepValid]
	)

	useEffect(() => {
		!teamName ? teamNameVaild(false) : teamNameVaild(true)
	}, [nextStepValid, teamName, teamNameVaild])

	const onChangeTeanName = (e: ChangeEvent<HTMLInputElement>) =>
		setTeamName(e.target.value)

	return (
		<TeamNameInputContainer danger={teamName.length === 30}>
			<Input
				isValid={isValid}
				value={teamName}
				onChange={onChangeTeanName}
				maxLength={30}
				errorMessage="빈 칸이 없어야합니다!"
				placeholder="팀 이름을 입력해주세요!"
			/>
			<span>{teamName.length} / 30</span>
		</TeamNameInputContainer>
	)
}

export default TeamNameInput
