import './App.css'
import {KonstaProvider} from "konsta/react";
import {Capacitor,} from "@capacitor/core";
import TabLayout from "./routes/TabLayout.tsx";


export default function MyApp() {
    const platform = Capacitor.getPlatform();
    const theme = platform === 'ios' ? 'ios' : 'material';

    return (
        <>
            <KonstaProvider theme={theme}>
                <TabLayout/>
            </KonstaProvider>
        </>
    );
}

