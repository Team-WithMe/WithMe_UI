import { FC } from 'react'
import styled from '@emotion/styled'

import Button from '@components/common/Button'
import { ModalContainer } from './styles'

interface Props {
	title: string
	description: string
	onToMainPage: () => void
	onCloseModal: () => void
}

const CheckModalContainer = styled(ModalContainer)`
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

const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	font-weight: 500;
`

const Description = styled.pre`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.gray_55};
`

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`

const CheckModal: FC<Props> = props => {
	const { title, description, onToMainPage, onCloseModal } = props

	return (
		<CheckModalContainer>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ButtonWrapper>
				<Button bgColor="danger" onClick={onCloseModal}>
					취소
				</Button>
				<Button bgColor="primary" onClick={onToMainPage}>
					확인
				</Button>
			</ButtonWrapper>
		</CheckModalContainer>
	)
}

export default CheckModal
