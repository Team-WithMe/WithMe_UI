import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// js 번들링
	{
		input: 'src/index.ts',
		output: {
			dir: 'build',
			format: 'esm',
			sourcemap: true
		},
		plugins: [commonjs(), typescript()],
		preserveModules: true,
		external: ['react', 'classnames']
	},
	// d.ts (타입 정의 파일) 번들링
	{
		input: 'src/typings/props.types.d.ts',
		output: [{ file: 'build/typings/props.types.d.ts', format: 'es' }],
		plugins: [dts()]
	}
];
