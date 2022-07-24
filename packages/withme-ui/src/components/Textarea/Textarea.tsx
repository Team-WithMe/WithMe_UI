import {
	FC,
	ReactNode,
	TextareaHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react';
import classNames from 'classnames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	autoSize?: boolean;
	className?: string;
	error?: boolean;
	row?: number;
	resize?: boolean;
	suffix?: ReactNode;
	value: string;
	maxLength?: number;
	maxHeight?: number;
}

const Textarea: FC<TextareaProps> = ({
	autoSize = false,
	className,
	error = false,
	row = 3,
	resize = false,
	suffix,
	value,
	maxLength,
	maxHeight,
	...props
}) => {
	const [isFocus, setIsFocus] = useState(false);

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const { current: textRefCurrent } = textareaRef;

	const onFocus = useCallback(() => setIsFocus(true), []);
	const onBlur = useCallback(() => setIsFocus(false), []);

	const base = 'wm-textarea';
	const cx = classNames(
		base,
		{ [`${base}--resize`]: resize },
		{ [`${base}--focus`]: isFocus },
		{ [`${base}--error`]: error }
	);

	useEffect(() => {
		//* auto resize
		if (textRefCurrent && autoSize !== false) {
			if (maxHeight && maxHeight <= textRefCurrent.scrollHeight) {
				// 설정한 최대 높이보다 값이 높으면 auto resize를 멈춘다.
			} else {
				textRefCurrent.style.height = 'auto';
				textRefCurrent.style.height = textRefCurrent.scrollHeight + 'px';
			}
		}
	}, [autoSize, maxHeight, textRefCurrent, value]);

	return (
		<div className={`${cx} ${className || ''}`}>
			<textarea
				ref={textareaRef}
				value={value}
				maxLength={maxLength}
				onFocus={onFocus}
				onBlur={onBlur}
				rows={row}
				{...props}
			/>
			{suffix && <div className={`${base}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Textarea;
