import {supabase} from "../utils/supabase.ts";
import {useQuery} from "@tanstack/react-query";
import {weatherDataPointSerializer} from "../utils/serializers.ts";

const useLocations = () => {
    return useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const {data} = await supabase
                .from('locations')
                .select(`
                    *,
                    most_recent_weather_data(*) as data
                `)

            return data?.map(location => {
                const mostRecentWeatherDatum = location.most_recent_weather_data[0];

                // Remove the most_recent_weather_data key from the location object
                delete location.most_recent_weather_data;

                return ({
                    ...location,
                    data: mostRecentWeatherDatum,
                    serializedData: weatherDataPointSerializer(mostRecentWeatherDatum),
                });
            });
        },
        refetchInterval: 1000 * 10, // Refetch every 10 seconds
    });
}
export default useLocations;
