/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    plugins: [],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            black: '#080C22',
            shadowcl: 'rgba(0,0,0,0.19)',
        },
        fontFamily: {
            sans: ['PingFang-SC-Medium', 'PingFang-SC', 'Microsoft YaHei', 'Microsoft Jhenghei', 'sans-serif'],
        },
        extend: {
            borderRadius: {
                '4xl': '.04rem',
                '8xl': '.08rem',
            },
        },
    },
};
