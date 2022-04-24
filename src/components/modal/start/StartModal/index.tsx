import { FC } from 'react'

import Logo from '@components/common/Logo'
import SelectBox from '@components/modal/start/SelectBox'
import {
	CloseIcon,
	StartModalContainer
} from '@components/modal/start/StartModal/styles'

interface StartModalProps {
	onCloseModal: () => void
}

const StartModal: FC<StartModalProps> = ({ onCloseModal }) => (
	<StartModalContainer>
		<CloseIcon onClick={onCloseModal} />
		<div className="modal__logo">
			<Logo />
		</div>
		<div className="modal__text">
			<h2>이츠에서 같이 성장할 팀을 구해보세요!</h2>
			<span>
				서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!
			</span>
		</div>
		<div className="modal__select">
			<SelectBox isLeader={true} />
			<SelectBox isLeader={false} />
		</div>
	</StartModalContainer>
)

export default StartModal
