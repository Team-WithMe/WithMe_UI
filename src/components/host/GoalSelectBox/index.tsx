import { FC, useRef } from 'react'
import { GoalSelectBoxContainer } from './styles'

export interface GoalSelectBoxProps {
	active: boolean
	imgSrc: string
	title: string
	description?: string
	onCangeIsGoal?: () => void
}

const GoalSelectBox: FC<GoalSelectBoxProps> = props => {
	const { active, imgSrc, title, description, onCangeIsGoal } = props
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const onClickButton = () => buttonRef.current && buttonRef.current.click()

	return (
		<GoalSelectBoxContainer active={active}>
			<div className="select-box" onClick={onClickButton}>
				<img src={imgSrc} alt={imgSrc} />
				<div className="select-box__content">
					{description && <span>{description}</span>}
					<h2>{title}</h2>
				</div>
			</div>
			{
				//* /host/goal 목적 선택 버튼 (하나만 선택가능)
				onCangeIsGoal && (
					<button ref={buttonRef} hidden onClick={onCangeIsGoal} />
				)
				//* /host/skills 스킬 선택 버튼 (다중 선택가능)
			}
		</GoalSelectBoxContainer>
	)
}

export default GoalSelectBox
