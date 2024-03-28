import {BlockHeader, BlockTitle, List, ListItem, Navbar, Page, Toggle} from "konsta/react";
import useLocations from "../hooks/use-locations.ts";
import useConfig from "../hooks/use-config.ts";

const SettingsPage = () => {
    const {data: locations} = useLocations();
    const {config, toggleLocationDisplay} = useConfig();
    return (
        <Page>
            <Navbar title="Settings"/>
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
        </Page>
    );
}
export default SettingsPage;