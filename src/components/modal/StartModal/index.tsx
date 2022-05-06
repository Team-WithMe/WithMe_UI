import { FC } from 'react'

import Logo from '@components/common/Logo'
import {
	CloseIcon,
	LogoWrapper,
	ModalContainer
} from '@components/modal/styles'
import SelectBox from '@components/host/StartSelectBox'
import { ModalSelect, ModalText } from './styles'

interface StartModalProps {
	onCloseModal: () => void
}

const StartModal: FC<StartModalProps> = ({ onCloseModal }) => (
	<ModalContainer>
		<CloseIcon onClick={onCloseModal} />
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
		<ModalText>
			<h2>이츠에서 같이 성장할 팀을 구해보세요!</h2>
			<span>
				서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!
			</span>
		</ModalText>
		<ModalSelect>
			<SelectBox isLeader={true} />
			<SelectBox isLeader={false} />
		</ModalSelect>
	</ModalContainer>
)

export default StartModal
