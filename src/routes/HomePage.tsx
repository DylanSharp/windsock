import {List, ListItem, Navbar, Page} from "konsta/react";
import useWeatherData from "../hooks/use-weather-data.ts";
import useLocations from "../hooks/use-locations.ts";
import {useEffect, useState} from "react";
import {weatherDataPointSerializer} from "../utils/serializers.ts";
import useConfig from "../hooks/use-config.ts";
import {Link} from "react-router-dom";

const HomePage = () => {
    const [locationsWithData, setLocationsWithData] = useState([]); // [1
    const {data: weatherData} = useWeatherData();
    const {data: locations} = useLocations();
    const {getLocationDisplayStatus} = useConfig();

    useEffect(() => {
        if (!locations || !weatherData) {
            return;
        }
        const newLocationData = locations?.map((location) => {
            const dataPoint = weatherData?.find((dataPoint) => dataPoint.location_uuid === location.uuid);
            return {
                ...location,
                data: weatherDataPointSerializer(dataPoint)
            }
        });
        setLocationsWithData(newLocationData);
    }, [locations, weatherData]);

    return (
        <Page>
            <Navbar title="Home"/>
            <List>
                {locationsWithData && locationsWithData.map((location) => {
                    if (!getLocationDisplayStatus(location.uuid)) {
                        return null;
                    }
                    return (
                        <ListItem
                            key={location.uuid}
                            link
                            chevronMaterial={true}
                            title={location.name}
                            subtitle={`${location.data?.windspeed_ave}`}
                            text={location.data?.dir_true}
                        />
                    )
                })}
            </List>
            {/* If there are no locations selected to display, show a message. */}
            {locationsWithData && locationsWithData.filter(location => getLocationDisplayStatus(location.uuid)).length === 0 && (
                <
                >
                    <p
                        className="text-center text-gray-500"
                    >Please selected at least one location to display.</p>
                    <Link to="/settings" className="text-blue-600">Go to settings Page</Link>
                </>
            )}

        </Page>
    )
}
export default HomePage;