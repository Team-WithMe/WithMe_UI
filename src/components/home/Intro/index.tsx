import mainIntroImg from '@assets/images/main_intro.png'

import StartModal from '@components/modal/start/StartModal'
import {
	ArrowIcon,
	IntroContainer,
	StartButton
} from '@components/home/Intro/styles'
import useModal from '@hooks/useModal'

const Intro = () => {
	const { onModalEvent, ModalPortal } = useModal()

	return (
		<IntroContainer>
			<div className="intro__left">
				<div className="intro__left_title">
					<span>쉽고 간편하게</span>
					<span>
						<span className="text_bold">스터디</span>와&nbsp;
						<span className="text_bold">프로젝트 팀</span>을 구할 수 있는
					</span>
					<span className="text_bold">
						온라인 스터디 매칭 플랫폼 <span className="text_primary">It's</span>
					</span>
				</div>
				<span className="intro__left_text">
					<span className="text_primary">이츠</span>로 함께 할 팀원을
					찾아보세요!
				</span>
				<StartButton onClick={onModalEvent(true)} bgColor="primary">
					서비스 시작하기 <ArrowIcon />
				</StartButton>
			</div>
			<div className="intro__right">
				<img src={mainIntroImg} />
			</div>
			<ModalPortal>
				<StartModal onCloseModal={onModalEvent(false)} />
			</ModalPortal>
		</IntroContainer>
	)
}
export default Intro
