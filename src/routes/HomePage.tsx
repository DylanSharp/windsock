import {List, ListItem, Navbar, Page} from "konsta/react";
import useWeatherData from "../hooks/use-weather-data.ts";

const HomePage = () => {
    const {data} = useWeatherData();

    return (
        <Page>
            <Navbar title="Home"/>
            <List>
                {data && data.map((dataPoint) => {
                    return data && (
                        <ListItem
                            key={dataPoint.uuid}
                            link
                            chevronMaterial={false}
                            title={dataPoint.location_name}
                            after={`${dataPoint?.dir_mag}°`}
                            subtitle={`${dataPoint?.windspeed_ave} km/h`}
                            text={dataPoint?.dir_true}
                        />
                    )
                })}
            </List>
        </Page>
    )
}
export default HomePage;