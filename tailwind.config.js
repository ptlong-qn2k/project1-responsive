/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            xl: { max: '1300px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '900px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '768px' },
            mdpc: { min: '376px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '550px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};
