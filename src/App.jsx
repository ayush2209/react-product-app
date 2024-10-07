import { lazy, useState, Suspense, useEffect, useContext } from 'react';
import './App.css';
import ProductList from './component/ProductList/ProductList';
import ProductDetails from './component/ProductDetails/ProductDetails';
import { createBrowserRouter, RouterProvider, Outlet, Route } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import ProtectedRoute from './component/Auth/ProtectedRoute';
import UserLoginContext from './utils/UserLogginContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

const CatorayWiseProduct = lazy(() =>
  import('./component/CatogaryWiseProduct/CatogaryWiseProductAccordion')
);

const About = lazy(() => import('./component/Profile/About'));

const Home = () => {
  const [searchProduct, setSearchProduct] = useState('');

  const [userName, setUserName] = useState('Ayush');
  const { user } = useContext(UserLoginContext);

  useEffect(() => {
    const data = {
      user: 'Ayush Anand'
    }
    setUserName(data.user);
  }, []);

  return (
    <Provider store={appStore}> 
      <UserLoginContext.Provider value={{ user: userName, setUserName }}> 
        <ProtectedRoute component={Navbar} setSearchProduct={setSearchProduct} />
        <Outlet />
      </UserLoginContext.Provider>
    </Provider>
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
