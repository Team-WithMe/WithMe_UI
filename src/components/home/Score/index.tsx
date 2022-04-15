import { ScoreContainer } from '@components/home/Score/styles'

const Score = () => (
	<ScoreContainer>
		<div className="score__text">
			<span className="text_size_30">
				총 <span className="text_bold">10,000명</span> 에 사람들이
			</span>
			<span className="text_size_45">
				<span className="text_bold text_primary">It&apos;s </span> 에서 스터디를
				진행했어요.
			</span>
			<span className="text_size_20">(2022년 4월 1일 기준)</span>
		</div>
	</ScoreContainer>
)

export default Score
