import {
	FC,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	ReactNode,
	useCallback,
	useState
} from 'react';
import classNames from 'classnames';
import { SizeType } from '../../typings/props.types';
import { ClosedEye, OpenedEye } from './icons';

type InputAttributesType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;

interface InputProps extends InputAttributesType {
	className?: string;
	error?: boolean;
	password?: boolean;
	prefix?: ReactNode;
	size?: keyof SizeType;
	suffix?: ReactNode;
	type?: HTMLInputTypeAttribute;
	value?: string;
}

const Input: FC<InputProps> = ({
	className,
	error = false,
	password = false,
	prefix,
	size = 'middle',
	suffix,
	type,
	value,
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(true);
	const [isFocus, setIsFocus] = useState(false);

	const onToggleHidePassword = useCallback(() => setHidePassword(prev => !prev), []);

	const onFocus = useCallback(() => setIsFocus(true), []);
	const onBlur = useCallback(() => setIsFocus(false), []);

	const base = 'wm-input';
	const cx = classNames(
		base,
		`${base}--size-${size}`,
		{ [`${base}--focus`]: isFocus },
		{ [`${base}--error`]: error }
	);

	return (
		<div className={`${cx} ${className}`}>
			{prefix && <div className={`${base}__prefix`}>{prefix}</div>}
			<input
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				type={password && hidePassword ? 'password' : type}
				{...props}
			/>

			{password && (
				<button type="button" className={`${base}__password-icon`} onClick={onToggleHidePassword}>
					{hidePassword ? <OpenedEye /> : <ClosedEye />}
				</button>
			)}
			{suffix && <div className={`${base}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Input;
