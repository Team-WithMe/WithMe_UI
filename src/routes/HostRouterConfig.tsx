import { Navigate, useRoutes } from 'react-router-dom'

import Goal from '@pages/HostPage/TeamGoal'
import Skils from '@pages/HostPage/TeamSkils'
import Name from '@pages/HostPage/TeamName'
import Description from '@pages/HostPage/TeamDescription'
import Success from '@pages/HostPage/TeamCreateSuccess'

const HostRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Navigate to="/host/goal" /> },
		{ path: 'goal', element: <Goal /> },
		{ path: 'skils', element: <Skils /> },
		{ path: 'name', element: <Name /> },
		{ path: 'description', element: <Description /> },
		{ path: 'success', element: <Success /> }
	])
	return routes
}

export default HostRouterConfig
