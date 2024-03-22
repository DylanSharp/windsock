import {useEffect, useState} from "react";
import {supabase} from "../utils/supabase.ts";
import {List, ListItem, Navbar} from "konsta/react";


const Home = () => {
    const [locations, setLocations] = useState<Location[]>([])
    const [weatherData, setWeatherData] = useState([]);
    const updateWeatherData = () => {
        const locationIDs = locations.map(location => location.uuid);
        supabase
            .from('most_recent_weather_data')
            .select('*')
            .then(({data, error}) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log('Got weather data:');
                console.log(JSON.stringify({data}, null, 2));
                setWeatherData(data);
            });
    };

    const updateLocations = async () => {
        supabase
            .from('locations')
            .select()
            .then(({data, error}) => {
                if (error) {
                    console.log(error)
                    return
                }
                setLocations(data);
                updateWeatherData();
            });
    }
    useEffect(() => {
        updateLocations();
    }, []);

    useEffect(() => {
        // If weather data changes, update the locations
        setLocations((prevLocations) => {
            const newLocations = prevLocations.map((location: Location) => {
                const weather = weatherData.find((data: WeatherData) => data.location_uuid === location.uuid);
                if (weather) {
                    return {
                        ...location,
                        weatherData: {...weather}
                    }
                }
            });
            console.log('Updated locations:', newLocations);
            return newLocations;
        })
    }, [weatherData]);

    return (
        <div>
            <Navbar title="Home"/>
            <List>
                {locations && locations.map((location: Location) => {
                    return location && location.weatherData && (
                        <ListItem
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
        </div>
    )
}
export default Home;