import { createTheme } from '@mantine/core';

export const dragonBallTheme = createTheme({
  primaryColor: 'dbOrange',
  colors: {
    // Generato su misura per l'arancione di Goku
    dbOrange: [
      '#fff0e4', '#ffe0cf', '#fec09b', '#fe9e64', '#fd8135',
      '#fd6c13', '#fe6000', '#e34f00', '#ca4500', '#b03b00'
    ],
    // Blu scuro per i contrasti
    dbBlue: [
      '#e5f0ff', '#cce0ff', '#99c2ff', '#66a3ff', '#3385ff',
      '#0066ff', '#0052cc', '#003d99', '#002966', '#001433'
    ]
  },
  fontFamily: 'Roboto, sans-serif', // Potete usare un font pulito per la UI
  headings: {
    fontFamily: 'Montserrat, sans-serif', // E un font più "bold" per i titoli
    fontWeight: 800,
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        color: 'dbOrange',
      },
    },
    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'md',
        withBorder: true,
      },
    },
  },
});