import {useParams} from "react-router-dom";
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {Card, Navbar, Page, Table} from "konsta/react";
import {IoArrowBack} from "react-icons/io5";
import {format} from "date-fns";

const HistoryPage = () => {
    // Get the location ID from the route params
    const {locationId} = useParams();
    const {serializedData} = useWeatherDataHistory(locationId);
    return (
        <Page>
            <Navbar
                title={(
                    <h1>Windsock</h1>
                )}
                centerTitle={true}
                bgClassName={"bg-primary-800 rounded-b-xl"}
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
                    {serializedData?.map((dataPoint) => (
                        <tr key={dataPoint.uuid}>
                            <td
                                className="text-center"
                            >{format(new Date(dataPoint.last_updated), 'HH:mm')}</td>
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
            </Card>
        </Page>
    )
}
export default HistoryPage;