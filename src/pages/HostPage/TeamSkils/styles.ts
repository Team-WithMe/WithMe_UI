import Button from '@components/common/Button'
import styled from '@emotion/styled'

export const SelectSkillList = styled.div`
	display: flex;
	gap: 10px;
	padding: 0 0 20px;
	color: ${({ theme }) => theme.colors.gray_77};
	flex-wrap: wrap;
`

export const SkillWrapper = styled.div`
	width: 100%;
	height: 510px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
`

export const SkillListGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`

export const SkillBox = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	${({ active, theme }) =>
		`border: 1px solid ${
			active ? theme.colors.primary : theme.colors.gray_ee
		}`};
	border-radius: 10px;
	padding: 20px 0;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.secondary};
	}
	> svg {
		width: 50px;
		height: 50px;
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	> span {
		color: ${({ theme }) => theme.colors.gray_77};
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
`

export const MoveButton = styled(Button)`
	padding: 8px 12px;
	font-size: ${({ theme }) => theme.fontSizes.small};
`

export const ClearButton = styled(Button)`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	padding: 8px 12px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	background-color: ${({ theme }) => theme.colors.danger};
`
