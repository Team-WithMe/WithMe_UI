import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'

import { ReactProps } from '@typings/common'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
	.modal-background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.75);
	}
`

const useModal = () => {
	const [modalOpened, setModalOpened] = useState(false)

	const onModalEvent = useCallback(
		(isModal: boolean) => () => setModalOpened(isModal),
		[]
	)

	const ModalPortal: FC<ReactProps> = ({ children }) => {
		const ref = useRef<Element | null>(null)
		const [mounted, setMounted] = useState(false)

		useEffect(() => {
			setMounted(true)
			if (document) {
				const dom = document.querySelector('#root-modal')
				ref.current = dom
			}
		}, [])

		if (ref.current && mounted && modalOpened) {
			return createPortal(
				<Container>
					<div
						className="modal-background"
						role="presentation"
						onClick={onModalEvent(false)}
					/>
					{children}
				</Container>,
				ref.current
			)
		}
		return null
	}
	return { onModalEvent, ModalPortal }
}

export default useModal
