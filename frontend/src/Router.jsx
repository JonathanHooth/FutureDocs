import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import Landing from './Landing'
import Postings from './pages/Postings/Postings'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "postings",
        element: <Postings />,
      },
    ]


  }
])

export const Router = () => {
  return <RouterProvider router={routes} />
}