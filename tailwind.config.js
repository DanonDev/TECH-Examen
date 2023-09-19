/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            'main-white': '#FFFFFF',
            'main-gary': '#707070',
            'main-dark-green': '#114D46',
            'main-green': '#62BB65',
            'main-black': '#000000',
            'main-shadow': '#F2F2F2',
        },
        rotate: {
            small: '12deg',
            full: '-360deg',
        },
        extend: {
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
