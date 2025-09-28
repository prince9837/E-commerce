import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import AppLayout from './components/layout/AppLayout';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import Error from './Pages/Error';
import Form from './Pages/Form';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, 
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:productId", element: <ProductDetail /> },
        { path: "/cart", element: <Cart /> },
        { path: "/form", element: <Form /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />; 
};

export default App;
