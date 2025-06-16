import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './i18n';
import { ThemeProvider } from '@mui/material';
import theme from './theme';


import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import App from './App';
import Home from './pages/Home';
import Error from './pages/Error';

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
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);