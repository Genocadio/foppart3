import { Platform } from "react-native";
const theme = {
    colors: {
      primary: '#0366d6',
      textPrimary: '#000', // Default text color
      textSecondary: '#555', // Secondary text color
      backgroundWhite: '#fff',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    fonts: {
        main: Platform.select({
          ios: 'Roboto',  
          android: 'Sans-serif', 
          default: 'Arial font', 
        }),
    },
  };
  
  export default theme;
  