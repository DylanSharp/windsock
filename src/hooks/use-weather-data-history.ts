import {useQuery} from '@tanstack/react-query';
import {supabase} from '../utils/supabase';
import {useEffect, useState} from "react";
import {weatherDataPointSerializer} from "../utils/serializers.ts";

const WEATHER_DATA_HISTORY_QUERY_KEY = 'weather_data_history';

const useWeatherDataHistory = (locationId: string, limit: number = 100) => {
    const [serializedData, setSerializedData] = useState([]);

    const result = useQuery({
        queryKey: [WEATHER_DATA_HISTORY_QUERY_KEY, locationId],
        queryFn: async () => {
            const result = await supabase
                .from('weather_data')
                .select('*')
                .eq('location_uuid', locationId)
                .order('created_at', {ascending: false})
                .limit(limit);
            return result.data;
        },
        refetchInterval: 1000 * 10, // Refetch every 10 seconds
    });

    useEffect(() => {
        if (!result.data) {
            return;
        }
        setSerializedData(result.data.map((dataPoint) => (weatherDataPointSerializer(dataPoint))));
    }, [result.data]);

    return {
        serializedData,
        ...result
    }

};

export default useWeatherDataHistory;
