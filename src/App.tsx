import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import RouterConfig from '@routes/RouterConfig'
import GlobalStyle from '@styles/GlobalStyle'
import theme from '@styles/theme'

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Suspense fallback={<span>Loading...</span>}>
				<RouterConfig />
			</Suspense>
		</ThemeProvider>
	</BrowserRouter>
)

export default App
