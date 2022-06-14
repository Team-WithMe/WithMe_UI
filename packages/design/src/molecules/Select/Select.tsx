import React, { FC, useEffect, useRef, useState } from 'react'
import '@wm/styles/build/select.css'

import DownArrow from '../../svg/DownArrow'
import Text from '../../atoms/Text'
import Check from '../../svg/Check'

interface SelectOption {
	label: string
	value: string
}

interface SelectProps {
	onOptionSelected?: (option: SelectOption, optionIndex: number) => void
	options?: SelectOption[]
	label?: string
}

const Select: FC<SelectProps> = ({
	onOptionSelected: hendler,
	options = [],
	label = '옵션을 선택해주세요!'
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [overlayTop, setOverlayTop] = useState<number>(0)
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
	const labelRef = useRef<HTMLButtonElement>(null)
	const selectedOption = selectedIndex === null ? null : options[selectedIndex]

	const onLabelClick = () => setIsOpen(prev => !prev)

	const onOptionSelected =
		(option: SelectOption, optionIndex: number) => () => {
			if (hendler) hendler(option, optionIndex)
			setSelectedIndex(optionIndex)
			setIsOpen(false)
		}

	useEffect(() => {
		setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
	}, [labelRef.current?.offsetHeight])

	return (
		<div className="wm-select">
			<button
				className="wm-select__label"
				ref={labelRef}
				onClick={onLabelClick}
			>
				<Text>{selectedOption ? selectedOption.label : label}</Text>
				<DownArrow
					className={`wm-select__icon wm-select__icon--${
						isOpen ? 'open' : 'closed'
					}`}
				/>
			</button>
			{isOpen && (
				<ul style={{ top: overlayTop }} className="wm-select__overlay">
					{options.map((option, index) => {
						let className = 'wm-select__option'
						const isSelected = selectedIndex === index
						isSelected && (className = `${className} ${className}--selected`)

						return (
							<li
								key={option.value}
								className={className}
								onClick={onOptionSelected(option, index)}
							>
								<Text>{option.label}</Text>
								{isSelected && <Check />}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default Select
