import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CapacitorUpdater} from '@capgo/capacitor-updater';


import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/HomePage.tsx";
import TablePage from "./routes/TablePage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

CapacitorUpdater.notifyAppReady();

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: "table",
                element: <TablePage/>,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
