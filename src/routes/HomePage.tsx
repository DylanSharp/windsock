import {List, ListItem, Navbar, Page} from "konsta/react";
import useLocations from "../hooks/use-locations.ts";


const HomePage = () => {
    const locations = useLocations();
    return (
        <Page>
            <Navbar title="Home"/>
            <List>
                {locations && locations.map((location: Location) => {
                    return location && location.weatherData && (
                        <ListItem
                            key={location.uuid}
                            link
                            chevronMaterial={false}
                            title={location.name}
                            after={`${location.weatherData?.dir_mag}°`}
                            subtitle={`${location.weatherData?.windspeed_ave} km/h`}
                            text={location.weatherData?.dir_true}
                        />
                    )
                })}
            </List>
        </Page>
    )
}
export default HomePage;