module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'jost': ['jost'],
      'john-mayer': ['John Mayer']
    },
    extend: {
      colors: {
        'nude-1': '#f9C586',   
        'nude-2': '#EEA15F',
        'red': '#C01440',
        'purple': '#A20B5C',
        'orange': '#BF452D',
        'mud': '#CC6445',
        // Text
        'text-color': '#4D4D4D',
        'link-color': '#7C177B'
      },
      fontSize: {
        'huge': '5rem',
        'h1': '2.75rem', // H1 
        'h2': '2.25rem', // H2
        'h3': '1.75rem', // H3
        'h4': '1.5rem', // H4
        'h5': '1.25rem', // H4
        'link': '1.25rem', // nav links
        'paragraph': '1rem', // Paragraph / Body
        'footer': '1rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      lineHeight: {
        '13': '3.75rem'
      }
      // backgroundImage: theme => ({
      //   'wavy-background': "url('../public/backgrounds/wavy-bg.png')",
      // })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
