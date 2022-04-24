import { Alias, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'
import * as path from 'path'

interface TSConfig {
	compilerOptions: {
		baseUrl?: string
		paths?: {
			[key: string]: string[]
		}
	}
}

const tsConfig = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, './tsconfig.json'), 'utf-8')
) as TSConfig

const tsConfigAlias = (typeScriptConfig: TSConfig): Alias[] => {
	const aliasMap: Alias[] = []
	for (const key in typeScriptConfig.compilerOptions.paths) {
		if (/\/\*$/.test(key)) {
			const keyWithoutStar = key.replace(/\/\*$/, '')
			const targetDir = typeScriptConfig.compilerOptions.paths[key][0].replace(
				/\/\*$/,
				''
			)
			aliasMap.push({
				find: keyWithoutStar,
				replacement: path.join(__dirname, '/', targetDir)
			})
		} else {
			aliasMap.push({
				find: key,
				replacement: path.join(
					__dirname,
					'/',
					typeScriptConfig.compilerOptions.paths[key][0]
				)
			})
		}
	}
	return aliasMap
}

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: tsConfigAlias(tsConfig)
	}
})