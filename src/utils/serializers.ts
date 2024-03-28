const EMPTY_VAL_PLACEHOLDER = '-';

export const weatherDataPointSerializer = (dataPoint: any) => {
    if (!dataPoint) {
        return dataPoint;
    }
    const formatValue = (key: string, unit: string) => {
        if (dataPoint[key] == 999) {
            dataPoint[key] = EMPTY_VAL_PLACEHOLDER;
        }
        if (dataPoint[key] === EMPTY_VAL_PLACEHOLDER) {
            return `${EMPTY_VAL_PLACEHOLDER}`;
        } else {
            return `${dataPoint[key]}${unit}`;
        }
    };

    return {
        ...dataPoint,
        dir_mag: formatValue('dir_mag', '°'),
        windspeed_ave: formatValue('windspeed_ave', ' km/h'),
        dir_true: formatValue('dir_true', ''),
        dir_mag_unformatted: dataPoint.dir_mag,
    };
}
