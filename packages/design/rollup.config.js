import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import { uglify } from 'rollup-plugin-uglify'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'

export default [
	// js 번들링
	{
		input: 'src/index.ts',
		output: {
			dir: 'build',
			format: 'esm',
			sourcemap: true
		},
		plugins: [
			alias({
				entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
			}),
			commonjs(),
			typescript(),
			uglify()
		],
		preserveModules: true,
		external: ['react', 'classnames']
	},
	// d.ts (타입 정의 파일) 번들링
	{
		input: 'src/typings/props.types.d.ts',
		output: [{ file: 'build/props.types.d.ts', format: 'es' }],
		plugins: [dts()]
	}
]
