import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import leaderImg from '@assets/images/select_img_1.png'
import memberImg from '@assets/images/select_img_2.png'
import {
	SelectBoxContainer,
	SelectButton
} from '@components/modal/start/SelectBox/styles'

const SelectBox: FC<{ isLeader: boolean }> = ({ isLeader }) => {
	const navigate = useNavigate()

	const onMovePage = useCallback((to: string) => () => navigate(to), [navigate])

	return (
		<SelectBoxContainer>
			<img src={isLeader ? leaderImg : memberImg} alt="select_img" />
			<div className="select__text">
				<h2>{isLeader ? '스터디장이신가요' : '스터디원이신가요'}</h2>
				<span>
					{isLeader
						? '팀페이지를 만들 수 있어요!'
						: '나에게 맞는 팀을 찾아보세요!'}
				</span>
			</div>
			<SelectButton onClick={onMovePage(isLeader ? '/host' : '/list')}>
				{isLeader ? '스터디장으로 진행하기' : '스터디원으로 참여하기'}
			</SelectButton>
		</SelectBoxContainer>
	)
}

export default SelectBox
