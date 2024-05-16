import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './module/error.tsx'
import Listing from './module/landing.tsx'
import Select from './module/select.tsx'
import DetailRows from './module/detail-rows.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "macbook-pro/:inch",
        element: <Listing />,
      },
      {
        path: "macbook-pro/select/:name",
        element: <Select />,
      },
      {
        path: "/",
        element: <DetailRows />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
