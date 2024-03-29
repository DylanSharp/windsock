import {useParams} from "react-router-dom";
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {Card, Navbar, Page, Table} from "konsta/react";
import {IoArrowBack} from "react-icons/io5";
import useLocations from "../hooks/use-locations.ts";
import LoadingSpinner from "../components/LoadingSpinner.tsx";

const HistoryPage = () => {
    const {locationId} = useParams();
    const {data: locations} = useLocations();
    const locationName = locations?.find((location) => location.uuid === locationId)?.name;
    const {serializedData, isLoading, isError} = useWeatherDataHistory(locationId);
    return (
        <Page>
            <Navbar
                title={(
                    <h1>Windsock</h1>
                )}
                subtitle={locationName}
                centerTitle={true}
                bgClassName={"bg-primary-700 rounded-b-xl"}
                titleClassName={"text-white text-2xl font-semibold"}
                left={
                    <div
                        className="flex text-white"
                    >
                        <button
                            className="flex items-center space-x-2 p-2 text-white"
                            onClick={() => history.back()}>
                            <IoArrowBack className="w-6 h-6"/>
                            Back
                        </button>
                    </div>
                }
            />
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
        </Page>
    )
}
export default HistoryPage;