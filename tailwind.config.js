/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "bright": "#70F799",
        "light": "#36E96C",
        "main": '#11D14B',
        "dim": "#099834",
        "dark": "#095D22",

      },
      secondary: {
        "bright": "#7188E7",
        "light": "#4764DA",
        "main": '#2646c7',
        "dim": "#122D9C",
        "dark": "#132675",
      },
      transparent: '#00000000',
      black: '#000',
      white: '#fff',
      "off-white": "#e6e6e6",
      slate: "#252525",
      "slate-light": "#363636",
      "off-black": "#121212",
    },
    extend: {
      backgroundImage: {
        "gradient-green": "linear-gradient(-35deg, var(--color-primary) 15%, var(--color-white) 85%)",
        "gradient-blue": "linear-gradient(to right, var(--color-white) 5%, var(--color-secondary) 95%)",
        'about-hero': "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/BrandDesignBG_v1.jpg')",
        'media-hero': "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/VideoProductionBG_v1.jpg')",
        'web-hero': "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/WebDevBG_v1.jpg')",
        "dark-geo": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.95),rgba(0, 0, 0, 1)), url(http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/308781-white-geometric-wallpaper-geometry-triangle-monochrome-hd.jpg)",
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1900px',
      },
      fontFamily: {
        "style": "Cinzel Decorative, sans-serif",
        "standard": "Josephine Sans, sans-serif",
      },
      // Adding CSS variables for colors
      customForms: (theme) => ({
        'root': {
          '--color-primary': theme('colors.primary.main'),
          '--color-primary-light': theme('colors.primary.light'),
          '--color-primary-bright': theme('colors.primary.bright'),
          '--color-primary-dim': theme('colors.primary.dim'),
          '--color-primary-dark': theme('colors.primary.dark'),
          '--color-secondary': theme('colors.secondary.main'),
          '--color-secondary-light': theme('colors.secondary.light'),
          '--color-secondary-bright': theme('colors.secondary.bright'),
          '--color-secondary-dim': theme('colors.secondary.dim'),
          '--color-secondary-dark': theme('colors.secondary.dark'),
          '--color-white': theme('colors.white'),
          '--color-off-white': theme('colors.off-white'),
          '--color-slate': theme('colors.slate'),
          '--color-slate-light': theme('colors.slate-light'),
          '--color-off-black': theme('colors.off-black'),
        },
      }),
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary.main'),
          '--color-primary-light': theme('colors.primary.light'),
          '--color-primary-bright': theme('colors.primary.bright'),
          '--color-primary-dim': theme('colors.primary.dim'),
          '--color-primary-dark': theme('colors.primary.dark'),
          '--color-secondary': theme('colors.secondary.main'),
          '--color-secondary-light': theme('colors.secondary.light'),
          '--color-secondary-bright': theme('colors.secondary.bright'),
          '--color-secondary-dim': theme('colors.secondary.dim'),
          '--color-secondary-dark': theme('colors.secondary.dark'),
          '--color-white': theme('colors.white'),
          '--color-off-white': theme('colors.off-white'),
          '--color-slate': theme('colors.slate'),
          '--color-slate-light': theme('colors.slate-light'),
          '--color-off-black': theme('colors.off-black'),
        }
      });
    },
  ],
}

