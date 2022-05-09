import styled from '@emotion/styled'

export const TeamNameInputContainer = styled.div<{ danger: boolean }>`
	width: 100%;
	position: relative;
	> span {
		position: absolute;
		top: 12px;
		right: 10px;
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme, danger }) =>
			danger ? theme.colors.danger : theme.colors.gray_55};
	}
`
