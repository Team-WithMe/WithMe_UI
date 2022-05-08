import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import Input from '@components/common/Input'
import { hostNameState, nextStepValidState } from '@lib/atom/host'

function TeamNameInput() {
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
		<Input
			isValid={isValid}
			value={teamName}
			onChange={onChangeTeanName}
			errorMessage="빈 칸이 없어야합니다!"
			placeholder="팀 이름을 입력해주세요!"
		/>
	)
}

export default TeamNameInput
