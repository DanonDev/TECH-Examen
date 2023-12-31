/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            'main-white': '#FFFFFF',
            'main-gray': '#707070',
            'bag-gray': '#DCDCDC',
            'main-dark-gray': '#414141',
            'main-light-gray': '#F8F8F8',
            'main-dark-green': '#114D46',
            'text-red': '#952121',
            'text-green': '#0E4F2D',
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
                'slider-mob': '450px',
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            spacing: {
                'section-w-desc': '500px',
                'section-h-desc': '190px',
                'section-mt-desc': '566px',
                'section-mt-mob': '485px',
                'section-w-mobl': '23rem',
                'section-h-mobl': '9rem',
                'container-sort': '39rem',
                // 'custom-map': '300px',
            },
        },
    },
    plugins: [],
};
