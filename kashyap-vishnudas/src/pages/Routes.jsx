import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import Testing from './Testing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Testing />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};
export default Routes;
