import fontSize from '../fontSize'

test('snapshot of fontsizes', () => {
	expect(fontSize).toMatchSnapshot()
})
