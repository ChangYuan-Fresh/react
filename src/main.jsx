import { createRoot } from 'react-dom/client'
import './assets/scss/all.scss'
import { createHashRouter, RouterProvider } from 'react-router'
import routes from './assets/routes/index.jsx'
import { store } from './assets/redux/store.js';
import { Provider } from 'react-redux';

const router = createHashRouter(routes);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
