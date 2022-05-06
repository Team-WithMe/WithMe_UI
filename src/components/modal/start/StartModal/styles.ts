import styled from '@emotion/styled'

export const ModalText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	@media ${({ theme }) => theme.device.NoteBook} {
		gap: 5px;
	}
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		@media ${({ theme }) => theme.device.NoteBook} {
			font-size: ${({ theme }) => theme.fontSizes.big};
		}
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		color: ${({ theme }) => theme.colors.gray_77};
		@media ${({ theme }) => theme.device.NoteBook} {
			font-size: ${({ theme }) => theme.fontSizes.base};
		}
	}
`

export const ModalSelect = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	width: 100%;
	@media ${({ theme }) => theme.device.mobileL} {
		flex-direction: column;
		gap: 20px;
	}
`
