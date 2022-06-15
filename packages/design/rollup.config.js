import typescript from 'rollup-plugin-typescript2'

export default {
	input: [
		'src/index.ts',
		'src/components/Button/index.ts',
		'src/components/Color/index.ts',
		'src/components/Margin/index.ts',
		'src/components/Text/index.ts'
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
