import { FC } from 'react'

import Button from '@components/common/Button'
import {
	CheckModalButtonWrapper,
	CheckModalContainer,
	CheckModalDescription,
	CheckModalTitle
} from './styles'

interface Props {
	title: string
	description: string
	onToMainPage: () => void
	onCloseModal: () => void
}

const CheckModal: FC<Props> = props => {
	const { title, description, onToMainPage, onCloseModal } = props

	return (
		<CheckModalContainer>
			<CheckModalTitle>{title}</CheckModalTitle>
			<CheckModalDescription>{description}</CheckModalDescription>
			<CheckModalButtonWrapper>
				<Button bgColor="danger" onClick={onCloseModal}>
					취소
				</Button>
				<Button bgColor="primary" onClick={onToMainPage}>
					확인
				</Button>
			</CheckModalButtonWrapper>
		</CheckModalContainer>
	)
}

export default CheckModal
