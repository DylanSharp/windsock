const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {
                colors: {
                    primary: {
                        '50': '#f0faff',
                        '100': '#e0f3fe',
                        '200': '#b9e9fe',
                        '300': '#7cd8fd',
                        '400': '#36c6fa',
                        '500': '#0cafeb',
                        '600': '#0090cd',
                        '700': '#0170a3',
                        '800': '#065e86',
                        '900': '#0b4e6f',
                        '950': '#07324a',
                    },

                },
            },
            plugins: [],
        }
    }
);

