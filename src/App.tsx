import './App.css'
import {KonstaProvider} from "konsta/react";
import {Capacitor,} from "@capacitor/core";
import TabLayout from "./routes/TabLayout.tsx";
import useConfig from "./hooks/use-config.ts";
import {useEffect} from "react";


export default function MyApp() {
    const platform = Capacitor.getPlatform();
    const theme = platform === 'ios' ? 'ios' : 'material';
    const {loadConfig} = useConfig();

    useEffect(() => {
        loadConfig();
    }, []);

    return (
        <>
            <KonstaProvider theme={theme}>
                <TabLayout/>
            </KonstaProvider>
        </>
    );
}

