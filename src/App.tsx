import './App.css'
import TabbarPage from "./pages/tabBarPage.tsx";
import {KonstaProvider} from "konsta/react";
import {Capacitor} from "@capacitor/core";

export default function MyApp() {
    const platform = Capacitor.getPlatform();
    const theme = platform === 'ios' ? 'ios' : 'material';

    return (
        <>
            <KonstaProvider theme={theme}>
                <TabbarPage/>
            </KonstaProvider>
        </>
    );
}

