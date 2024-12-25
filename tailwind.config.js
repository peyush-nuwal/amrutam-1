/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offYellow: "#FFF7E2",
        green: "#3A643B",
        lightText: "#666666",
        light_green:"#EAF2EA",
      },
},
  },
  plugins: [],
}

