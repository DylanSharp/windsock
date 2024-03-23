import {List, ListItem, Navbar, Page} from "konsta/react";
import useWeatherData from "../hooks/use-weather-data.ts";
import useLocations from "../hooks/use-locations.ts";
import {useEffect, useState} from "react";
import {weatherDataPointSerializer} from "../utils/serializers.ts";

const HomePage = () => {
    const [locationsWithData, setLocationsWithData] = useState([]); // [1
    const {data: weatherData} = useWeatherData();
    const {data: locations} = useLocations();

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
                    return (
                        <ListItem
                            key={location.uuid}
                            link
                            chevronMaterial={false}
                            title={location.name}
                            after={`${location?.data?.dir_mag}`}
                            subtitle={`${location.data?.windspeed_ave}`}
                            text={location.data?.dir_true}
                        />
                    )
                })}
            </List>
        </Page>
    )
}
export default HomePage;