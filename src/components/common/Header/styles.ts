import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
	padding: 25px 14.5%;
	background-color: white;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lineColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.menus__item {
		display: flex;
		gap: 20px;
		a {
			transition: 0.3s;
			&:hover {
				filter: brightness(50%);
			}
		}
	}
`
