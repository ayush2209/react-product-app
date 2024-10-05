import './App.css';
import ProductList from './component/ProductList/ProductList';
import ProductDetails from './component/ProductDetails/ProductDetails';
import { createBrowserRouter, RouterProvider, Outlet, Route } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import { lazy, useState, Suspense, useEffect } from 'react';
import ProtectedRoute from './component/Auth/ProtectedRoute';

const CatorayWiseProduct = lazy(() =>
  import('./component/CatogaryWiseProduct/CatogaryWiseProductAccordion')
);

const About = lazy(() => import('./component/Profile/About'));

const Home = () => {
  const [searchProduct, setSearchProduct] = useState('');

  const [isLoggedIn , setIsLoggedIn] = useState('');

  const handleLoginClick = () => {
    console.log('login')
  }

  useEffect(() => {
    const token = localStorage.getItem('isAuthenticated');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn])

  return (
    <div>
      <ProtectedRoute component={Navbar} setSearchProduct={setSearchProduct} />
      <Outlet />
    </div>
  )
}

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <ProtectedRoute component={ProductList} /> },
      { path: 'productDetails/:id', element: <ProtectedRoute component={ProductDetails} /> },
      {
        path: 'allCatogary',
        element: (
          <Suspense>
            <ProtectedRoute component={CatorayWiseProduct} />
          </Suspense>
        )
      },
      {
        path: '/about',
        element: (
          <Suspense>
            <ProtectedRoute component={About} />
          </Suspense>
        )
      }
    ],
    errorElement: <h1>404 Not Found</h1>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default App;
