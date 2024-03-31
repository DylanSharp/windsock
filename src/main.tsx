import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CapacitorUpdater} from '@capgo/capacitor-updater';


import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/HomePage.tsx";
import SettingsPage from "./routes/SettingsPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import HistoryPageLayout from "./routes/HistoryPageLayout.tsx";
import HistoryTablePage from "./routes/HistoryTablePage.tsx";
import HistoryChartPage from "./routes/HistoryChartPage.tsx";

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
                path: "settings",
                element: <SettingsPage/>,
            },
            {
                path: "history/:locationId",
                element: <HistoryPageLayout/>,
                children: [
                    {
                        path: "table",
                        element: <HistoryTablePage/>,
                    },
                    {
                        path: "chart",
                        element: <HistoryChartPage/>,
                    },
                ],
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
