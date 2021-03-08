import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false;
import Fonts from '../styles/Fonts';

const theme = extendTheme({
  fonts: {
    heading: "Space Mono",
    body: "Space Mono",
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
