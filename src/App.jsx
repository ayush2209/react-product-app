import './App.css';
import ProductList from './component/ProductList/ProductList';
import ProductDetails from './component/ProductDetails/ProductDetails';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './component/Header/Navbar';
import { useState } from 'react';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#90caf9',
//     },
//     background: {
//       default: '#121212',
//       paper: '#1d1d1d',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#b0bec5',
//     },
//   },
// });

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#1976d2',
//     },
//     background: {
//       default: '#ffffff',
//       paper: '#f5f5f5',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#757575',
//     },
//   },
// });

const Home = () => {
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <div style={{}}>
      <Navbar setSearchProduct={setSearchProduct} />
      <ProductList searchProduct={searchProduct}/>
      <Outlet />
    </div>
  )
}

const appRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'productDetails/:id', element: <ProductDetails /> }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}


export default App;
