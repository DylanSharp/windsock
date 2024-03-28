import {useEffect} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {supabase} from '../utils/supabase';

const WEATHER_DATA_QUERY_KEY = 'weather_data';

const useWeatherData = () => {
    const queryClient = useQueryClient();

    const handleWeatherDataInserts = (payload) => {
        const currentData = queryClient.getQueryData([WEATHER_DATA_QUERY_KEY]);
        if (currentData) {
            queryClient.setQueryData([WEATHER_DATA_QUERY_KEY], (oldData) => {
                // Find the corresponding datapoint in the cached based on the location_uuid and update it.
                return oldData.map((dataPoint) => {
                    if (dataPoint.location_uuid === payload.new.location_uuid) {
                        return payload.new;
                    }
                    return dataPoint;
                });
            });
        }
    };

    useEffect(() => {
        // Subscribe to inserts in the weather_data table and update the cache to keep it synced.
        const subscription = supabase
            .channel(WEATHER_DATA_QUERY_KEY)
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
    });

    return useQuery({
        queryKey: [WEATHER_DATA_QUERY_KEY],
        queryFn: async () => {
            const result = await supabase
                .from('weather_data')
                .select('*');
            return result.data;
        },
    });
};

export default useWeatherData;
