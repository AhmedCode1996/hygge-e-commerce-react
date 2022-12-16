import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './index.css';
import {
  SignUp,
  Login,
  Contact,
  Faq,
  Jobs,
  CategoriesPage,
  Search,
} from './pages';
import AboutUs from './pages/AboutUs';
import SingleProduct from './components/SingleProduct';
import { ProductsContext } from './globalData/ProductsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'contactus',
        element: <Contact />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'jobs',
        element: <Jobs />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'categories/:id',
        element: <SingleProduct />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <ProductsContext>
    <RouterProvider router={router} />
  </ProductsContext>
);
