import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CapacitorUpdater } from '@capgo/capacitor-updater';

CapacitorUpdater.notifyAppReady();

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/HomePage.tsx";
import TablePage from "./routes/TablePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "table",
                element: <TablePage />,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
