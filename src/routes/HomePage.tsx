import {Card, List, Navbar, Page} from "konsta/react";
import useLocations from "../hooks/use-locations.ts";
import useConfig from "../hooks/use-config.ts";
import {Link, useNavigate} from "react-router-dom";
import NoWindIcon from "../icons/NoWindIcon.tsx";
import WindsockIcon from "../icons/WindsockIcon.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import {GiWindsock} from "react-icons/gi";

const HomePage = () => {
    const {data: locations, isLoading} = useLocations();
    const {getLocationDisplayStatus} = useConfig();
    const navigate = useNavigate();

    const navigateToHistoryPage = (location) => {
        navigate(`/history/${location.uuid}/table`);
    }

    return (
        <Page>
            <Navbar
                title={(
                    <div className="flex space-x-2 items-center">
                        <GiWindsock className="h-7 w-7"/>
                        <h1>Windsock</h1>
                    </div>
                )}
                centerTitle={true}
                bgClassName={"bg-primary-700 rounded-b-xl"}
                titleClassName={"text-white text-2xl font-semibold"}
            />
            <List>
                {locations && locations.map((location) => {
                    if (!getLocationDisplayStatus(location.uuid)) {
                        return null;
                    }
                    const degToRotate = parseInt(location.serializedData?.dir_mag_unformatted) + 180;
                    const degIsNumber = !isNaN(degToRotate);
                    return (
                        <Card
                            key={location.uuid}
                            className={"bg-[#dff4ff]"}
                            onClick={() => navigateToHistoryPage(location)}
                        >
                            <div className={"flex justify-between"}>
                                <div className={"flex flex-col items-start space-y-3"}>
                                    <p className="text-xl font-semibold">
                                        {location.name}
                                        {/* Time ago */}
                                        <span className="text-sm text-gray-500 ml-2 font-light">
                                            {location.serializedData?.last_updated}
                                        </span>
                                    </p>
                                    <p className={"pl-2"}>
                                        {location.serializedData?.temp}°C
                                    </p>
                                    <div className={"flex items-center space-x-2"}>
                                        <p className="bg-primary-600 text-white rounded-full px-2 py-1 font-bold text-md">
                                            {location.serializedData?.windspeed_ave}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Max {location.serializedData?.windspeed_max}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex items-center px-5"}
                                >
                                    {degIsNumber ? (
                                        <div
                                            className="flex flex-col items-center space-y-1"
                                        >
                                            <p className="font-semibold">{location.serializedData?.dir_true}</p>
                                            <WindsockIcon
                                                style={{transform: `rotate(${degToRotate}deg)`}}
                                                className="text-gray-800 h-12 w-12"
                                            />
                                            <p className="font-semibold">{location.serializedData?.dir_mag}</p>
                                        </div>
                                    ) : (
                                        <NoWindIcon
                                            className={"text-gray-800 h-12 w-12"}
                                        />
                                    )}
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </List>
            {/* If there are no locations selected to display, show a message. */}
            {!isLoading && locations && locations.filter(location => getLocationDisplayStatus(location.uuid)).length === 0 && (
                <>
                    <p
                        className="text-center text-gray-500"
                    >Please selected at least one location to display.</p>
                    <Link to="/settings" className="text-blue-600">Go to settings Page</Link>
                </>
            )}
            {/* If the data is loading, show a loading spinner. */}
            {isLoading && (
                <div
                    className={"flex justify-center mt-5"}
                >
                    <LoadingSpinner/>
                </div>
            )}

        </Page>
    )
}
export default HomePage;