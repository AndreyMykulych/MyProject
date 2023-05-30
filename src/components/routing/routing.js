import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Main from '../mainComponent/mainContent/main'
export const routing = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            index:true,
            element: <Main/>
        }
        ]
    }
])