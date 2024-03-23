import {useEffect, useState} from 'react'
import useLocations from "./use-locations.ts";

const defaultConfig = {
    locations: []
}

const useConfig = () => {
    const [config, setConfig] = useState(defaultConfig)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {data: locationsFromDB} = useLocations()

    const LOCAL_STORAGE_CONFIG_KEY = 'appConfig';

    const loadConfig = async () => {
        try {
            // Get the config from local storage but let remote locations take precedence.
            const storedConfig = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONFIG_KEY))
            if (locationsFromDB) {
                // If we have locations from the DB, reconcile the stored config with the locations from the DB.
                // This means ignoring locations in the stored config that are no longer in the DB and adding new
                // locations from the DB to the stored config.
                const updatedLocations = locationsFromDB.map(location => {
                    const storedLocation = storedConfig.locations.find(loc => loc.uuid === location.uuid)
                    return {
                        uuid: location.uuid,
                        name: location.name,
                        display: storedLocation?.display ?? true
                    }
                })
                saveConfig({...storedConfig, locations: updatedLocations})

            } else {
                setConfig(storedConfig || defaultConfig)
            }

        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        loadConfig()
    }, [locationsFromDB]);

    const saveConfig = (newConfig) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_CONFIG_KEY, JSON.stringify(newConfig))
            setConfig(newConfig)
        } catch (err) {
            setError(err)
        }
    }

    const toggleLocationDisplay = (locationUuid) => {
        const updatedLocations = config.locations.map(location => {
            if (location.uuid === locationUuid) {
                return {
                    ...location,
                    display: !location.display
                }
            }
            return location
        })
        saveConfig({...config, locations: updatedLocations})
    }

    const getLocationDisplayStatus = (locationUuid) => {
        return config.locations.find(location => location.uuid === locationUuid)?.display
    }

    return {
        config,
        loading,
        error,
        loadConfig,
        toggleLocationDisplay,
        getLocationDisplayStatus
    }
}

export default useConfig
