import {useQuery} from '@tanstack/react-query';
import {supabase} from '../utils/supabase';
import {useEffect, useState} from "react";
import {weatherDataPointSerializer} from "../utils/serializers.ts";

const WEATHER_DATA_HISTORY_QUERY_KEY = 'weather_data_history';

const useWeatherDataHistory = (locationId: string, limit: number = 100) => {
    const [serializedData, setSerializedData] = useState([]);

    const result = useQuery({
        queryKey: [WEATHER_DATA_HISTORY_QUERY_KEY],
        queryFn: async () => {
            const result = await supabase
                .from('weather_data')
                .select('*')
                .eq('location_uuid', locationId)
                .order('last_updated', {ascending: false})
                .limit(limit);
            return result.data;
        },
        staleTime: 1000 * 15, // 15 seconds
    });

    useEffect(() => {
        if (!result.data) {
            return;
        }
        setSerializedData(result.data.map((dataPoint) => (weatherDataPointSerializer(dataPoint))));
    }, []);

    return {
        serializedData,
        ...result
    }

};

export default useWeatherDataHistory;
