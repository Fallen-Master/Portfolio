
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Bulma } from 'react-bulma'

import 'bulma/css/bulma.min.css'
import './index.css'


import App from './App.jsx'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
// import Contact from './pages/Contact'
// import Resume from './pages/Resume'
// import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element:<AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);