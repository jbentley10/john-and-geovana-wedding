module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      'jost': ['jost'],
      'john-mayer': ['John Mayer']
    },
    extend: {
      colors: {
        'nude-1': '#f9C586',   
        'nude-2': '#f2b06f',
        'nude-3': '#efa765',
        'nude-4': '#EEA15F',
        'nude-4-transparent': 'rgba(161,95,238, .4)',
        'dark-brown': '#ca9157',
        'red': '#C01440',
        'purple': '#A20B5C',
        'orange': '#BF452D',
        'mud': '#CC6445',
        // Text
        'text-color': '#4D4D4D',
        'link-color': '#7C177B',
        'white': '#ffffff',
        // Gradients
        'purple-gradient-1': '#9F3F61',
        'orange-gradient-2': '#F1A461',
        'gradient-point-1': '#858C8A',
        'gradient-point-2': '#AD5164',
        'gradient-point-3': '#D6DBD5',
        'gradient-point-4': '#F8C585'
      },
      fontSize: {
        'huge-desktop': '7rem',
        'huge': '5rem',
        'h1': '4rem', // H1 
        'h2': '2.25rem', // H2
        'h3': '1.85rem', // H3
        'h4': '1.75rem', // H4
        'h5': '1.85rem', // H4
        'link': '1.25rem', // nav links
        'paragraph': '1.25rem', // Paragraph / Body
        'footer': '1rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      lineHeight: {
        '13': '3.75rem'
      }
      // backgroundImage: theme => ({
      //   'line-left-bottom': "url('../public/backgrounds/line-left--bottom.png')",
      // })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}