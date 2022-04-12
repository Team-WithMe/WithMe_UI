import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@pages/HomePage'))
const Host = lazy(() => import('@pages/HostPage'))
const List = lazy(() => import('@pages/ListPage'))
const Community = lazy(() => import('@src/pages/CommunityPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/host', element: <Host /> },
		{ path: '/list', element: <List /> },
		{ path: '/community', element: <Community /> }
	])
	return routes
}

export default RouterConfig
