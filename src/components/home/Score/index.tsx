import { ScoreContainer } from '@components/home/Score/styles'
import { itsInfoDatas } from '@lib/data/staticData'

const Score = () => (
	<ScoreContainer>
		<div className="score__text">
			<span className="text_size_30">
				총 <span className="text_bold">10,000명</span> 에 사람들이
			</span>
			<span className="text_size_45">
				<span className="text_bold text_primary">It&apos;s&nbsp;</span>
				에서 스터디를 진행했어요.
			</span>
			<span className="text_size_20">(2022년 4월 1일 기준)</span>
		</div>
		<div className="score__list">
			{itsInfoDatas.map(v => (
				<div key={v.id} className="list_item">
					<v.svg />
					<div className="list_text">
						<h1>
							{v.name !== 'liker' ? (
								`${v.data.toLocaleString('ko-KR')}+`
							) : (
								<>
									{v.data}
									<span className="small_text">/5.0</span>
								</>
							)}
						</h1>
						<span>{v.description}</span>
					</div>
				</div>
			))}
		</div>
	</ScoreContainer>
)

export default Score
