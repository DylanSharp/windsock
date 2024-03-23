import {supabase} from "../utils/supabase.ts";
import {useQuery} from "@tanstack/react-query";

const useLocations = () => {
    return useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const result = await supabase
                .from('locations')
                .select('*')
            return result.data
        }
    });
}
export default useLocations;