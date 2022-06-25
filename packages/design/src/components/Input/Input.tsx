import React, {
	FC,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	ReactNode,
	useCallback,
	useState
} from 'react'
import classNames from 'classnames'
import { size as inputSize } from '../../foundation'

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
	size?: keyof typeof inputSize
	password?: boolean
	type?: HTMLInputTypeAttribute
	// disabled?: boolean
	// error?: boolean
	prefix?: ReactNode
	suffix?: ReactNode
	// placeholder?: string
	// clear?: boolean
	// px?: number
	// py?: number
}

const Input: FC<InputProps> = ({
	size = 'middle',
	password = false,
	type = password ? 'password' : 'text',
	prefix,
	suffix,
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(true)
	const [isFocus, setIsFocus] = useState(false)

	const onToggleHidePassword = useCallback(
		() => setHidePassword(prev => !prev),
		[]
	)

	const onFocus = useCallback(() => setIsFocus(true), [])
	const onBlur = useCallback(() => setIsFocus(false), [])

	const base = 'wm-input'
	const className = classNames(
		base,
		`${base}--size-${size}`,
		{ [`${base}--focus`]: isFocus }
		// { [`${base}--error`]: error }
	)

	return (
		<span className={className}>
			{prefix && <div className={`${base}__prefix`}>{prefix}</div>}
			<input
				placeholder={'test'}
				onFocus={onFocus}
				onBlur={onBlur}
				type={hidePassword ? 'password' : 'text'}
				{...props}
			/>

			{password && (
				<div
					className={`${base}__password-icon`}
					onClick={onToggleHidePassword}
				>
					{hidePassword ? <OpenedEye /> : <ClosedEye />}
				</div>
			)}
			{suffix && <div className={`${base}__suffix`}>{suffix}</div>}
		</span>
	)
}

export default Input

const ClosedEye = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="current"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.8395 8.31135C15.755 8.38259 15.6518 8.41731 15.5494 8.41731C15.421 8.41731 15.2934 8.36275 15.2042 8.25679L14.0225 6.85308C13.5072 7.32155 12.8568 7.78776 12.0506 8.17045L12.7248 9.80378C12.8198 10.034 12.7103 10.2976 12.4801 10.3926C12.4237 10.4159 12.3655 10.4269 12.3082 10.4269C12.1311 10.4269 11.9631 10.3218 11.8913 10.1479L11.2167 8.5138C10.3924 8.80248 9.43326 8.99816 8.3242 9.04054V10.7861C8.3242 11.0351 8.12232 11.237 7.87332 11.237C7.62432 11.237 7.42243 11.0351 7.42243 10.7861V9.04054C6.41144 9.00188 5.52658 8.83483 4.75332 8.58695L4.109 10.1479C4.0372 10.3218 3.86925 10.4269 3.69205 10.4269C3.63467 10.4269 3.57651 10.4159 3.52015 10.3926C3.28997 10.2976 3.18041 10.034 3.27543 9.80378L3.90926 8.26818C3.07964 7.90274 2.40703 7.4469 1.86958 6.98158L0.796024 8.25679C0.706862 8.36264 0.579262 8.41731 0.450873 8.41731C0.348297 8.41731 0.24527 8.38248 0.16073 8.31135C-0.0297686 8.15095 -0.0542289 7.86656 0.106173 7.67606L1.22031 6.35271C0.413112 5.47507 0.0688621 4.70406 0.0367367 4.62933C-0.0615559 4.40061 0.0441763 4.13538 0.273 4.03709C0.50171 3.93857 0.766943 4.04453 0.865235 4.27335C0.895782 4.34324 1.24691 5.11774 2.08848 5.95616C2.10009 5.96417 2.11238 5.9707 2.12343 5.97995C2.15307 6.00497 2.17731 6.03371 2.19884 6.06381C2.77845 6.61637 3.5729 7.18381 4.63022 7.58723C4.64443 7.59152 4.65874 7.59422 4.67283 7.59997C4.67847 7.60234 4.6832 7.60594 4.68873 7.60854C5.56412 7.93475 6.61535 8.14892 7.8732 8.14892C13.1546 8.14892 14.8645 4.3119 14.8811 4.27313C14.9794 4.04442 15.2447 3.93823 15.4733 4.03686C15.7021 4.13516 15.8079 4.40039 15.7096 4.6291C15.6792 4.69966 15.3702 5.39109 14.6567 6.20651L15.8937 7.67583C16.0545 7.86656 16.03 8.15095 15.8395 8.31135Z"
			fill="current"
		/>
	</svg>
)

const OpenedEye = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="current"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0)">
			<path
				d="M15.941 7.81067C15.815 7.62732 12.7869 3.33325 8.00021 3.33325C3.8928 3.33325 0.23274 7.60266 0.0787376 7.78466C-0.0259203 7.90867 -0.0259203 8.09067 0.0787376 8.21533C0.23274 8.39733 3.8928 12.6667 8.00021 12.6667C12.1076 12.6667 15.7676 8.39733 15.9216 8.21533C16.0183 8.10067 16.027 7.93467 15.941 7.81067ZM8.00021 12.0001C4.7075 12.0001 1.57676 8.86002 0.781436 8.00001C1.57545 7.13934 4.70284 3.99995 8.00021 3.99995C11.8529 3.99995 14.5723 7.13534 15.2363 7.98201C14.4696 8.81468 11.3209 12.0001 8.00021 12.0001Z"
				fill="current"
			/>
			<path
				d="M7.99996 5.33325C6.52927 5.33325 5.33325 6.52927 5.33325 7.99996C5.33325 9.47064 6.52927 10.6667 7.99996 10.6667C9.47064 10.6667 10.6667 9.47064 10.6667 7.99996C10.6667 6.52927 9.47064 5.33325 7.99996 5.33325ZM7.99996 10C6.89728 10 5.99992 9.10267 5.99992 7.99999C5.99992 6.89731 6.89728 5.99995 7.99996 5.99995C9.10263 5.99995 9.99999 6.89731 9.99999 7.99999C9.99999 9.10267 9.10263 10 7.99996 10Z"
				fill="current"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
)
