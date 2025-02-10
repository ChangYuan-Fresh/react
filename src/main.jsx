import { createRoot } from 'react-dom/client'
import './assets/scss/all.scss'
import { createHashRouter, RouterProvider } from 'react-router'
import routes from './assets/routes/index.jsx'

const router = createHashRouter(routes);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
