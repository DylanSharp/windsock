import {Block, List, ListItem, Navbar, Page, Toggle} from "konsta/react";
import useLocations from "../hooks/use-locations.ts";
import useConfig from "../hooks/use-config.ts";

const SettingsPage = () => {
    const {data: locations} = useLocations();
    const {config, error, toggleLocationDisplay} = useConfig();
    return (
        <Page>
            <Navbar title="Settings"/>
            <Block>
                <p className="text-red-500">{error ? 'An error occurred while loading the settings' : ''}</p>
                <p className="text-gray-500">This page is for configuring the app. You can select which locations to display on the home page.</p>
            </Block>

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
                                checked={config.locations.find(loc => loc.uuid === location.uuid)?.display}
                                onChange={() => toggleLocationDisplay(location.uuid)
                                }
                            />
                        }
                    />))}
            </List>
        </Page>
    );
}
export default SettingsPage;