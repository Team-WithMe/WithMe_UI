import typescript from 'rollup-plugin-typescript2'

export default {
	input: [
		'src/index.ts',
		'src/atoms/Button/index.ts',
		'src/atoms/Color/index.ts',
		'src/atoms/Margin/index.ts',
		'src/atoms/Text/index.ts',
		'src/molecules/Select/index.ts'
	],
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap: true
	},
	plugins: [typescript()],
	preserveModules: true,
	external: ['react', '@wm/foundation']
}
