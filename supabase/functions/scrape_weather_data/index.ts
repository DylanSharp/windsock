import {createClient} from 'https://esm.sh/@supabase/supabase-js@2'
import {getGwxData} from './scraper.ts'

Deno.serve(async (req) => {

    const supabaseClient = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get the data from GWX
    const gwxData = await getGwxData();

    const errors = [];

    // Insert each row into the database
    for (const row of gwxData) {
        // Get corresponding location from the database
        const {data: locations, error: locationError} = await supabaseClient
            .from('locations')
            .select()
            .eq('original_location', row.originalLocation)

        if (locationError) {
            errors.push(locationError)
        }

        const location = locations?.[0]
        console.log('Got location:', location)

        // Get the most recent weather data for the location and ensure this is a new datapoint
        const {data: existingData, error: existingDataError} = await supabaseClient
            .from('weather_data')
            .select('last_updated')
            .eq('location_uuid', location?.uuid)
            .order('last_updated', {ascending: false})
            .limit(1)

        // Check that the data is new
        if (existingDataError) {
            errors.push(existingDataError)
        }

        if (existingData && existingData[0]?.last_updated === row.lastUpdated) {
            console.log('Data already exists for this location and time:', row.lastUpdated);
            continue;
        }

        // If the data point is new, insert it.
        if (location) {
            console.log('Inserting data for location:', location.uuid);
            // Insert the data into the database
            let newRow = [{
                location_uuid: location.uuid,
                windspeed_ave: row.windSpeedAve,
                windspeed_max: row.windSpeedMax,
                dir_true: row.dirTrue,
                dir_mag: row.dirMag,
                temp: row.temp,
                last_updated: row.lastUpdated,
            }];
            console.log('Inserting:', newRow);
            const {data, error} = await supabaseClient
                .from('weather_data')
                .insert(newRow)
                .select()

            errors.push(error)
        }

    }


    return new Response(JSON.stringify({
        scraped: gwxData,
        errors
    }), {
        headers: {'Content-Type': 'application/json'},
        status: 200,
    })
})
