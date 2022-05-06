import styled from '@emotion/styled'
import { ModalContainer } from '../styles'

export const CheckModalContainer = styled(ModalContainer)`
	align-items: flex-start;
	padding: 30px 50px;
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 20px 35px;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: auto;
		height: auto;
		border-radius: 8px;
		justify-content: center;
	}
`

export const CheckModalTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	font-weight: 500;
`

export const CheckModalDescription = styled.pre`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.gray_55};
`

export const CheckModalButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`
