import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import RouterConfig from '@routes/RouterConfig'
import GlobalStyle from '@styles/GlobalStyle'
import theme from '@styles/theme'

const App = () => (
	<RecoilRoot>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Suspense fallback={<span>Loading...</span>}>
					<RouterConfig />
				</Suspense>
			</ThemeProvider>
		</BrowserRouter>
	</RecoilRoot>
)

export default App
