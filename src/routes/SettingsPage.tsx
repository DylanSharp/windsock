import {BlockHeader, BlockTitle, List, ListItem, Navbar, Page, Toggle} from "konsta/react";
import useLocations from "../hooks/use-locations.ts";
import useConfig from "../hooks/use-config.ts";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import {App} from '@capacitor/app';
import {useEffect, useState} from "react";
import {CapacitorUpdater} from '@capgo/capacitor-updater';


const SettingsPage = () => {
    const {data: locations} = useLocations();
    const {config, loading, toggleLocationDisplay} = useConfig();
    const [appVersion, setAppVersion] = useState<string>();
    const [bundleVersion, setBundleVersion] = useState<string>();
    const [result, setResult] = useState<any>();
    useEffect(() => {
        async function getAppVersion() {
            try {
                const info = await App.getInfo();
                setAppVersion(info.version);
            } catch (e) {
                console.error('Failed to get app version', e);
            }

            const result = await CapacitorUpdater.current();
            setResult(result);
            if (result?.native && result?.bundle?.status === 'success') {
                setBundleVersion(result?.native);
            }
        }

        getAppVersion();
    }, []);


    return (
        <Page>
            <Navbar
                title={(
                    <h1
                        className={"text-white text-xl"}
                    >Settings</h1>
                )}
                centerTitle={true}
                bgClassName={"bg-primary-700 rounded-b-xl"}
                titleClassName={"text-white text-2xl font-semibold"}
            />
            {!loading && (
                <>
                    <BlockTitle>Locations</BlockTitle>
                    <BlockHeader>Selected locations will be displayed on the home screen.</BlockHeader>
                    <List strong inset>
                        {locations?.map((location) => (
                            <ListItem
                                key={location.uuid}
                                label
                                title={location.name}
                                after={
                                    <Toggle
                                        component="div"
                                        className="-my-1"
                                        checked={config.locations.find(loc => loc.uuid === location.uuid)?.display || false}
                                        onChange={() => toggleLocationDisplay(location.uuid)}
                                    />
                                }
                            />))}
                    </List>
                </>
            )}
            {loading && (
                <div className="mt-5">
                    <LoadingSpinner/>
                </div>
            )}
            {/* Show version number at the bottom of the page */}
            <div className="flex-1 flex flex-col justify-center items-end align-bottom pb-5">
                {appVersion && (<span className="text-xs mr-6 text-gray-400">App v{appVersion}</span>)}
                {bundleVersion && (<span className="text-xs mr-6 text-gray-400">Bundle v{bundleVersion}</span>)}
                {result && (<span className="text-xs mr-6 text-gray-400">Result: {JSON.stringify(result, null, 2)}</span>)}
            </div>
        </Page>
    );
}
export default SettingsPage;