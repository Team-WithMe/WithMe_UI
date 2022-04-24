import styled from '@emotion/styled'

import HostBox from '@components/host/HostBox'
import skills from '@lib/data/skills'

const SkillWrapper = styled.div``

const SkillBox = styled.div`
	display: flex;
	flex-direction: column;
	> svg {
		width: 80px;
	}
`

const TeamSkils = () => (
	<HostBox
		title="📗 언어 / 라이브러리 를 선택해주세요!"
		subTitle="복수로 선택할 수 있어요!"
	>
		<SkillWrapper>
			{skills.map(({ id, name, Icon }) => (
				<SkillBox key={id}>
					<Icon />
					{name}
				</SkillBox>
			))}
		</SkillWrapper>
	</HostBox>
)

export default TeamSkils
