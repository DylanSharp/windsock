import {useParams} from "react-router-dom";
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {Card} from "konsta/react";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import Chart from "../components/Chart.tsx";

const HistoryChartPage = () => {
    const {locationId} = useParams();
    const {serializedData, isLoading, isError} = useWeatherDataHistory(locationId);
    return (
        <Card>
            {isLoading ? (
                <LoadingSpinner/>
            ) : (
                <Chart/>
            )}
        </Card>
    )
}
export default HistoryChartPage;