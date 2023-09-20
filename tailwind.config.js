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
            'main-light-green': '#D8EADB',
        },
        rotate: {
            small: '12deg',
            full: '-360deg',
        },
        extend: {
            height: {
                'slider-desc': '550px',
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            spacing: {
                wave: '267px',
                'wave-mobile': '347px',
                'section-w-desc': '500px',
                'section-h-desc': '190px',
                'section-mt-desc': '455px',
                'section-mt-mob': '350px',
                'section-w-mobl': '450px',
            },
        },
    },
    plugins: [],
};
