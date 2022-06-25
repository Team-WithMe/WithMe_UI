import typescript from 'rollup-plugin-typescript2'

export default {
	input: [
		'src/index.ts',
		'src/components/Button/index.ts',
		'src/components/Text/index.ts',
		'src/components/Title/index.ts'
	],
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap: true
	},
	plugins: [typescript()],
	preserveModules: true,
	external: [
		'react',
		'@with-me/styles/build/button.css',
		'@with-me/styles/build/text.css',
		'@with-me/styles/build/title.css'
	]
}
