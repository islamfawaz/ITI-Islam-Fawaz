import React, { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Posts from './components/Posts';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'; 
import { AuthProvider } from './context/AuthContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', count: 2 },
    { id: 2, name: 'Fries', count: 1 },
    { id: 3, name: 'Soda', count: 4 },
  ]);

  const cartAmount = cartItems.reduce((acc, item) => acc + item.count, 0);

  const handleCounter = (id, num) => {
    const newArr = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + num } : item
    );
    setCartItems(newArr);
  };

  const handleReset = () => {
    const newArr = cartItems.map((item) => ({ ...item, count: 0 }));
    setCartItems(newArr);
  };

  const handleDelete = (id) => {
    const newArr = cartItems.filter((item) => item.id !== id);
    setCartItems(newArr);
  };

  const Layout = () => (
    <>
      <Navbar cartAmount={cartAmount} />
      <Outlet />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute element={<Home />} />} />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              handleCounter={handleCounter}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
