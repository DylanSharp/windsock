import './App.css'
import {KonstaProvider} from "konsta/react";
import {Capacitor} from "@capacitor/core";
import {App} from '@capacitor/app';
import TabLayout from "./routes/TabLayout.tsx";
import useConfig from "./hooks/use-config.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function MyApp() {
    const platform = Capacitor.getPlatform();
    const theme = platform === 'ios' ? 'ios' : 'material';
    const {loadConfig} = useConfig();
    const navigate = useNavigate();

    useEffect(() => {
        loadConfig();
    }, []);

    // Catch back button pressed and navigate back
    useEffect(() => {
        const handler = () => {
            // If current page can go back, navigate back, otherwise exit the app
            if (['/', '/settings'].includes(location.pathname)) {
                App.exitApp();
            } else {
                navigate(-1);
            }
        };
        App.addListener('backButton', handler);
    }, []);


    return (
        <>
            <KonstaProvider theme={theme}>
                <TabLayout/>
            </KonstaProvider>
        </>
    );
}

