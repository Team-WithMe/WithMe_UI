import React, { CSSProperties, FC, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import GridContext from './GridContext'

type SpanType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ColProps {
	children: ReactNode
	xs?: SpanType
	sm?: SpanType
	md?: SpanType
	lg?: SpanType
	xl?: SpanType
	xxl?: SpanType
}

const Col: FC<ColProps> = ({ children, xs, sm, md, lg, xl, xxl, ...props }) => {
	const { gutter } = useContext(GridContext)

	const base = 'wm-col'
	const className = classNames(
		base,
		{ [`${base}--xs-${xs}`]: xs },
		{ [`${base}--sm-${sm}`]: sm },
		{ [`${base}--md-${md}`]: md },
		{ [`${base}--lg-${lg}`]: lg },
		{ [`${base}--xl-${xl}`]: xl },
		{ [`${base}--xxl-${xxl}`]: xxl }
	)

	//* IE 지원을 위해 gap 속성 대신 반으로 나눈 값을 margin으로 설정
	const gutterStyled: CSSProperties = {}

	//* 수평 거터 스타일 설정
	if (gutter && gutter[0] > 0) {
		const horizontalGutter = gutter[0] / 2
		gutterStyled.paddingLeft = horizontalGutter
		gutterStyled.paddingRight = horizontalGutter
	}

	//* 수직 거터 스타일 설정
	if (gutter && gutter[1] > 0) {
		const verticalGutter = gutter[1] / 2
		gutterStyled.paddingTop = verticalGutter
		gutterStyled.paddingBottom = verticalGutter
	}

	return (
		<div className={className} style={{ ...gutterStyled }} {...props}>
			{children}
		</div>
	)
}

export default Col
