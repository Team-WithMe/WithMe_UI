import { FC, useRef } from 'react'
import styled from '@emotion/styled'

interface SelectBoxProps {
	active: boolean
	imgSrc: string
	title: string
	description?: string
	onCangeIsGoal?: () => void
}

const Container = styled.div<Pick<SelectBoxProps, 'active'>>`
	width: 100%;
	padding: 20px 0;
	border-radius: 10px;
	border: ${({ active, theme }) =>
		active
			? `3px solid ${theme.colors.primary}`
			: `3px solid ${theme.colors.lineColor}`};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.2s;
	.select-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		> img {
			width: 100px;
		}
		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> span {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: ${({ theme }) => theme.colors.gray_aa};
			}
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
			}
		}
	}
`

const SelectBox: FC<SelectBoxProps> = ({
	active,
	imgSrc,
	title,
	description,
	onCangeIsGoal
}) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const onClickButton = () => buttonRef.current && buttonRef.current.click()

	return (
		<Container active={active}>
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
		</Container>
	)
}

export default SelectBox
