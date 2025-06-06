import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import App from './app';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element:<Home/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);