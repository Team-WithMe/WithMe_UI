import Input from '@components/common/Input'
import HostBox from '@components/host/HostBox'
import { hostNameState } from '@lib/atom/host'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

const TeamName = () => {
	const [teamName, setTeamName] = useRecoilState(hostNameState)

	const [isValid, setIsValid] = useState(false)

	const onChangeTeanName = (e: ChangeEvent<HTMLInputElement>) => {
		setTeamName(e.target.value)
		teamName === '' ? setIsValid(true) : setIsValid(false)
	}

	return (
		<HostBox title="📘 팀의 이름을 정해주세요!">
			<Input
				isValid={isValid}
				value={teamName}
				onChange={onChangeTeanName}
				errorMessage="빈 칸이 없어야합니다!"
				placeholder="팀 이름을 입력해주세요!"
			/>
		</HostBox>
	)
}

export default TeamName
