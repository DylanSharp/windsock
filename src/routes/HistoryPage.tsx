import {useParams} from "react-router-dom";
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {Card, Navbar, Page, Table} from "konsta/react";
import {IoArrowBack} from "react-icons/io5";

const HistoryPage = () => {
    // Get the location ID from the route params
    const {locationId} = useParams();
    const {data, serializedData} = useWeatherDataHistory(locationId);
    return (
        <Page>
            <Navbar
                title={(
                    <h1>Windsock</h1>
                )}
                subtitle={"History"}
                centerTitle={true}
                bgClassName={"bg-[#0090cd] rounded-b-xl"}
                titleClassName={"text-white text-3xl"}
                left={
                    <div
                        className="flex text-white"
                    >
                        {/*Back icon*/}

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
                        <th>Temperature (°C)</th>
                        <th>Wind Speed</th>
                        <th>Wind Direction</th>
                    </tr>
                    </thead>
                    <tbody>
                    {serializedData?.map((dataPoint) => (
                        <tr key={dataPoint.uuid}>
                            <td>{dataPoint.temp}</td>
                            <td>{dataPoint.windspeed_ave}</td>
                            <td>{dataPoint.dir_mag}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card>
        </Page>
    )
}
export default HistoryPage;