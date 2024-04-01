import {ApexOptions} from 'apexcharts';
import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import useWeatherDataHistory from "../hooks/use-weather-data-history.ts";
import {useParams} from "react-router-dom";


const Chart = () => {
    const {locationId} = useParams();
    const {data} = useWeatherDataHistory(locationId);
    const [chartData, setChartData] = useState(
        [
            {
                name: 'Windspeed',
                type: 'area',
                data: [],
                stacked: true,
            },
            {
                name: 'Max Windspeed',
                type: 'area',
                data: [],
                stacked: true,
            }
        ],
    );
    useEffect(() => {
        if (data) {
            const windspeedData = data.map(dataPoint => {
                // Convert the date to a timestamp and windspeed to a number
                const timeStamp = new Date(dataPoint.last_updated).getTime();
                const windspeed = Number(dataPoint.windspeed_ave);
                return [timeStamp, windspeed];
            });
            const maxWindspeedData = data.map(dataPoint => {
                // Convert the date to a timestamp and windspeed to a number
                const timeStamp = new Date(dataPoint.last_updated).getTime();
                const maxWindspeed = Number(dataPoint.windspeed_max);
                return [timeStamp, maxWindspeed];
            });
            setChartData([
                {
                    name: 'Windspeed',
                    data: windspeedData,
                },
                {
                    name: 'Max Windspeed',
                    data: maxWindspeedData,
                }
            ]);
        }
    }, [data]);

    const options: ApexOptions = {
        colors: ['#0170a3', '#C7D2E2'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 310,
            id: 'area-datetime',
            toolbar: {
                show: true,
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        stroke: {
            curve: 'smooth',
            width: [1, 1],
        },

        dataLabels: {
            enabled: false,
        },

        markers: {
            size: 0,
        },

        labels: {
            show: false,
            position: 'top',
        } as any,

        xaxis: {
            type: 'datetime',
            tickAmount: 10,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },

        tooltip: {
            x: {
                format: 'dd MMM yyyy',
            },
        },

        grid: {
            strokeDashArray: 7,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },

        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 320,
                    },
                },
            },
        ],
    };

    return (
        <div
            className="col-span-12 rounded-xl border border-stroke bg-white px-5 pb-5 pt-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
            <div>
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                    Historical Windspeed
                </h4>
            </div>
            <div>
                <div id="chartThirteen" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={chartData}
                        type="area"
                        height={310}
                    />
                </div>
            </div>
        </div>
    );
};

export default Chart;
