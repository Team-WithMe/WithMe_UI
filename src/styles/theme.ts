const calcRem = (size: number) => `${size / 16}rem`

const fontSizes = {
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(22),
	xxxl: calcRem(25),
	big: calcRem(30),
	subTitleSize: calcRem(35),
	titleSize: calcRem(40)
}

const deviceSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	tabletL: '1024px',
	NoteBook: '1440px'
}

const colors = {
	primary: '#6C5CE7',
	bgColor: '#F8F9FD',
	lineColor: '#F1F3F7',
	gray_77: '#777777'
}

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
	NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`
}

const theme = {
	fontSizes,
	colors,
	deviceSizes,
	device
}

export default theme
