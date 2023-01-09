/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "100px",
        // => @media (min-width: 100px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primaryColor: "#635042",
        secondaryColor: "#D0C8BD",
        thirdColor: "#1D1D1D",
        darkBrown: "#29261F",
        lightBrown: "#29261D",
        mediumGrey: "#717171",
        CardsGrey: "#C5C5C5",
        white: "#FCFCFC",
        black: "#000000",
        footerGray: "#6A6A6A",
        footerBrown: "#28211C",
        footerGold: "#D7B940",
      },
      backgroundImage: {
        profileImage: "url(/media/home-page/profile.webp)",
        portfolioImage1: "url(/media/home-page/b-cake.webp)",
        portfolioImage2: "url(/media/home-page/b-cake2.webp)",
        portfolioImage3: "url(/media/home-page/box.webp)",
        portfolioImage4: "url(/media/home-page/bomb-cake.webp)",
      },
    },
  },
  plugins: [],
};
