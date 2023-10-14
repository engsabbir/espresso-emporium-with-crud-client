import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffeeDetails from './pages/UpdateCoffeeDetails.jsx';
import Layout from './layouts/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: ()=>fetch('http://localhost:5000/coffee')
      },
      {
        path: 'add-coffee',
        element: <AddCoffee />
      },
      {
        path: 'update-coffee-details/:id',
        element: <UpdateCoffeeDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
