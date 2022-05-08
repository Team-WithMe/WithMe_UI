import HostBox from '@components/host/HostBox'
import TeamNameInput from '@components/host/TeamNameInput'

const TeamName = () => {
	return (
		<HostBox title="📘 팀의 이름을 정해주세요!">
			<TeamNameInput />
		</HostBox>
	)
}

export default TeamName
