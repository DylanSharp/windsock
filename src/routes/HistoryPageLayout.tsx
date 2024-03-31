import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Navbar, Page, Segmented, SegmentedButton} from "konsta/react";
import {IoArrowBack} from "react-icons/io5";
import {CiViewTable} from "react-icons/ci";
import {FaChartLine} from "react-icons/fa6";
import useLocations from "../hooks/use-locations.ts";

const HistoryPageLayout = () => {
    const {locationId} = useParams();
    const {data: locations} = useLocations();
    const locationName = locations?.find((location) => location.uuid === locationId)?.name;
    const navigate = useNavigate();
    const location = useLocation();

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
                            onClick={() => navigate('/')}>
                            <IoArrowBack className="w-6 h-6"/>
                            Back
                        </button>
                    </div>
                }
                subnavbar={
                    <Segmented strong>
                        <SegmentedButton
                            small
                            strong
                            active={location.pathname.includes("table")}
                            onClick={() => navigate("table")}
                        >
                            <CiViewTable/>
                            <span className="ml-2">Table</span>
                        </SegmentedButton>
                        <SegmentedButton
                            small
                            strong
                            onClick={() => navigate("chart")}
                            active={location.pathname.includes("chart")}
                        >
                            <FaChartLine/>
                            <span className="ml-2">Chart</span>
                        </SegmentedButton>
                    </Segmented>
                }
            />
            <Outlet/>
        </Page>
    );
}
export default HistoryPageLayout;