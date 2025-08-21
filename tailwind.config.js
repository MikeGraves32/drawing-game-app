module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Add more paths here if you have them
    ],
    // Other configurations...,
    theme: {
        extend: {},
    },
    plugins: [
    require('tailwindcss-animate'), // Ensure this line is included
    ],
}