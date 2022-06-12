import React, { FC, useState } from 'react'
import '@wm/styles/build/select.css'

import ChevronDown from '../../svg/ChevronDown'

interface SelectOption {
	label: string
	value: string
}

interface SelectProps {
	onOptionSelected: (option: SelectOption, optionIndex: number) => void
	options?: SelectOption[]
	label?: string
}

const Select: FC<SelectProps> = ({
	onOptionSelected: hendler,
	options = [],
	label = '옵션을 선택해주세요!'
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const onLabelClick = () => setIsOpen(prev => !prev)

	const onOptionSelected = (option: SelectOption, optionIndex: number) => () =>
		hendler(option, optionIndex)

	return (
		<div className="wm-select">
			<button className="wm-select__label" onClick={onLabelClick}>
				<span>{label}</span>
				<ChevronDown />
			</button>
			{isOpen && (
				<ul className="wm-select__overlay">
					{options.map((option, index) => (
						<li key={option.value} onClick={onOptionSelected(option, index)}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Select
