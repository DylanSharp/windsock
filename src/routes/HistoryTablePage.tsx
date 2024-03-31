import {useParams} from "react-router-dom";
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {Card, Table} from "konsta/react";
import LoadingSpinner from "../components/LoadingSpinner.tsx";

const HistoryTablePage = () => {
    const {locationId} = useParams();
    const {serializedData, isLoading, isError} = useWeatherDataHistory(locationId);
    return (
        <Card>
            {isLoading ? (
                <LoadingSpinner/>
            ) : (
                <Table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Temp (°C)</th>
                        <th>Wind Speed</th>
                        <th>Wind Direction</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isError && (
                        <tr>
                            <td colSpan={4} className="text-center">Error loading data</td>
                        </tr>
                    )}
                    {!isLoading && serializedData?.map((dataPoint) => (
                        <tr key={dataPoint.uuid}>
                            <td
                                className="text-center"
                            >{dataPoint.last_updated}</td>
                            <td
                                className="text-center"
                            >{dataPoint.temp}</td>
                            <td
                                className="text-center"
                            >{dataPoint.windspeed_ave}</td>
                            <td
                                className="text-center"
                            >{dataPoint.dir_mag}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </Card>
    )
}
export default HistoryTablePage;