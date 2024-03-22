import './App.css'
import Layout from "./pages/Layout.tsx";
import {KonstaProvider} from "konsta/react";
import {Capacitor,} from "@capacitor/core";
import {CapacitorUpdater} from '@capgo/capacitor-updater'

CapacitorUpdater.notifyAppReady()

export default function MyApp() {
    const platform = Capacitor.getPlatform();
    const theme = platform === 'ios' ? 'ios' : 'material';

    return (
        <>
            <KonstaProvider theme={theme}>
                <Layout/>
            </KonstaProvider>
        </>
    );
}

