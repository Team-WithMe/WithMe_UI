import { useMemo, useState } from 'react'

import HostBox from '@components/host/HostBox'
import skills from '@lib/data/skills'
import {
	ButtonWrapper,
	ClearButton,
	MoveButton,
	SelectSkillList,
	SkillBox,
	SkillListGrid,
	SkillWrapper
} from '@pages/HostPage/TeamSkils/styles'
import { SkillsType } from '@typings/hostpage'

const TeamSkils = () => {
	const [pagination, setPagination] = useState(1)
	const [selectSkillList, setSelectSkillList] = useState<Array<SkillsType>>([])

	const getSkillsData = useMemo(() => {
		const limit = [13, 25, 37]
		const page = [1, 13, 25]
		return skills.slice(page[pagination - 1], limit[pagination - 1])
	}, [pagination])

	const onSelectSkill = (skill: SkillsType) => () => {
		if (selectSkillList.indexOf(skill) >= 0)
			setSelectSkillList(prev => prev.filter(v => v !== skill))
		else {
			if (selectSkillList.length > 7)
				return alert('최대 8개까지 선택가능합니다.')
			setSelectSkillList(prev => [...prev, skill])
		}
	}

	const onChangePagination = (type: 'prev' | 'next') => () => {
		type === 'prev'
			? setPagination(prev => (prev -= 1))
			: setPagination(prev => (prev += 1))
	}

	const onClearSkill = () => setSelectSkillList([])

	return (
		<HostBox
			title="📗 언어 / 라이브러리 를 선택해주세요!"
			subTitle="복수로 선택할 수 있어요!"
		>
			<SkillWrapper>
				<SelectSkillList>
					{selectSkillList.length ? (
						selectSkillList.map(skill => <span key={skill}>{skill}</span>)
					) : (
						<span>클릭해서 선택해보세요!</span>
					)}
					<ClearButton onClick={onClearSkill}>초기화</ClearButton>
				</SelectSkillList>
				<SkillListGrid>
					{getSkillsData.map(({ id, name, Icon }) => (
						<SkillBox
							key={id}
							onClick={onSelectSkill(name as SkillsType)}
							active={selectSkillList.indexOf(name as SkillsType) >= 0}
						>
							<Icon />
							{name}
						</SkillBox>
					))}
				</SkillListGrid>
				<ButtonWrapper>
					<MoveButton
						onClick={onChangePagination('prev')}
						disabled={pagination === 1}
					>
						이전
					</MoveButton>
					<span>{pagination} / 3</span>
					<MoveButton
						onClick={onChangePagination('next')}
						disabled={pagination === 3}
					>
						다음
					</MoveButton>
				</ButtonWrapper>
			</SkillWrapper>
		</HostBox>
	)
}

export default TeamSkils
