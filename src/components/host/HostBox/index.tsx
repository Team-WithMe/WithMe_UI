import { FC } from 'react'

import { ReactProps } from '@typings/common'
import { HostBoxContainer } from './styles'

interface HostBoxProps extends ReactProps {
	title: string
	subTitle?: string
}

const HostBox: FC<HostBoxProps> = ({ children, title, subTitle }) => (
	<HostBoxContainer>
		<div className="host-box__header">
			<span className="host-box__header--title">{title}</span>
			{subTitle && (
				<span className="host-box__header--subtitle">{subTitle}</span>
			)}
		</div>
		<hr />
		<div className="host-box__wrapper">{children}</div>
	</HostBoxContainer>
)

export default HostBox
