import {DOMParser} from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts";
import {weatherDataSerializer} from "./serializer.ts";


export const getGwxData = async () => {
    console.log('Running getSetGwxData.');

    const response = await fetch('http://www.gwx.co.za/?opt=stations');
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    if (!doc) {
        throw new Error('Failed to parse HTML document');
    }

    // Grab the rows in the data table.
    let rowCounter = 0;
    const rows: string[][] = []
    const tableRows = doc.querySelectorAll('body > table > tbody > tr:nth-child(3) > td > table > tbody > tr');
    tableRows.forEach((tr) => {
        if (rowCounter < 2) {
            rowCounter++;
            return;
        }
        const cells: string[] = [];
        tr.childNodes.forEach((td) => {
            // Ignore node that only contain whitespace or newlines
            if (td.textContent.trim() === '') {
                return;
            }

            cells.push(td.textContent)
        });
        rows.push([...cells])
        rowCounter++;
    });

    const output = rows.map((row: string[]) => {
        return {
            originalLocation: row[0],
            windSpeedAve: row[1],
            windSpeedMax: row[2],
            dirTrue: row[3],
            dirMag: row[4],
            temp: row[5],
            lastUpdated: row[6],
        };
    });

    return weatherDataSerializer(output);
};
