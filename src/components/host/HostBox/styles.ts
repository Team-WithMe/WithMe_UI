import styled from '@emotion/styled'

export const HostBoxContainer = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	.host-box__header {
		display: flex;
		align-items: flex-end;
		gap: 8px;
		padding: 20px 30px;
		&--title {
			font-size: ${({ theme }) => theme.fontSizes.xxl};
		}
		&--subtitle {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: ${({ theme }) => theme.colors.gray_aa};
		}
	}
	> hr {
		width: 100%;
		border: none;
		border-bottom: 1px solid ${({ theme }) => theme.colors.lineColor};
		margin: 0;
	}
	.host-box__wrapper {
		padding: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
