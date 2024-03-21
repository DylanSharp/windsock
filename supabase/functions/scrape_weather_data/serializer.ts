type GwxData = {
    originalLocation: string | null | undefined;
    windSpeedAve: number | null | undefined;
    windSpeedMax: number | null | undefined;
    dirTrue: string | null | undefined;
    dirMag: number | null | undefined;
    temp: number | null | undefined;
    lastUpdated: number | null | undefined; // Fixed type for lastUpdated
};

// Define a type for the input data items, assuming they start as any object since you're dynamically checking and converting properties
type InputDataItem = { [key: string]: any };

export function weatherDataSerializer(data: InputDataItem[]): GwxData[] {
    return data.map((item) => {
        const serializedItem: GwxData = {
            originalLocation: undefined,
            windSpeedAve: undefined,
            windSpeedMax: undefined,
            dirTrue: undefined,
            dirMag: undefined,
            temp: undefined,
            lastUpdated: undefined,
        };

        Object.keys(item).forEach((key) => {
            let value = item[key];

            if (value === 'Variable') {
                value = 999;
            }

            // Check for km/h and deg patterns and convert them to numbers
            if (typeof value === 'string' && key != 'lastUpdated') {
                const numericPart = value.match(/(\d+\.?\d*)/);

                if (numericPart) {
                    // Convert numeric part to number
                    value = parseFloat(numericPart[0]);
                }
            }

            else if (key === 'lastUpdated') {
                const parts = value.split(' ');
                const timeParts = parts[0].split(':');
                const dateParts = parts[1].split('/');

                // Note: Months are 0-based in JavaScript, hence the "- 1"
                const date = new Date(
                    parseInt(dateParts[2], 10), // year
                    parseInt(dateParts[1], 10) - 1, // month
                    parseInt(dateParts[0], 10), // day
                    parseInt(timeParts[0], 10), // hours
                    parseInt(timeParts[1], 10), // minutes
                    parseInt(timeParts[2], 10) // seconds
                );

                value = date.toISOString();
            }

            // Explicitly cast the key to keyof GwxData to ensure type safety when assigning to serializedItem
            const typedKey = key as keyof GwxData;
            serializedItem[typedKey] = value;
        });

        return serializedItem;
    });
}
