import typescript from 'rollup-plugin-typescript2'

export default {
	input: [
		'src/index.ts',
		'src/components/Button/index.ts',
		'src/components/Text/index.ts',
		'src/components/Input/index.ts',
		'src/components/Title/index.ts'
	],
	output: {
		dir: 'build',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [typescript()],
	preserveModules: true,
	external: ['react']
}
