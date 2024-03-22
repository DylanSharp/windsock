import {supabase} from "../utils/supabase.ts";
import {useEffect, useState} from "react";

const useLocations = () => {
    const [locations, setLocations] = useState([]);

    const updateWeatherData = () => {
        supabase
            .from('most_recent_weather_data')
            .select('*')
            .then(({data: weatherData, error}) => {
                if (error) {
                    console.log(error)
                    return
                }
                setLocations((prevLocations) => {
                    return prevLocations.map((location: Location) => {
                        const weather = weatherData.find((data: WeatherData) => data.location_uuid === location.uuid);
                        if (weather) {
                            return {
                                ...location,
                                weatherData: {...weather}
                            }
                        }
                    });
                })
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


    const handleWeatherDataInserts = (payload) => {
        const newDataPoint = payload.new;
        console.log('Got new weather data', newDataPoint)
        setLocations((prevLocations) => {
            return prevLocations.map((location: Location) => {
                if (location.uuid === newDataPoint.location_uuid) {
                    return {
                        ...location,
                        weatherData: {...newDataPoint}
                    }
                } else {
                    return {...location}
                }
            });
        });
    };

    useEffect(() => {
        // Subscribe to inserts in the weather_data table
        const subscription = supabase
            .channel('rides')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'weather_data'
                },
                handleWeatherDataInserts)
            .subscribe()

        return () => {
            subscription.unsubscribe()
        }
    }, []);

    return locations;
}
export default useLocations;