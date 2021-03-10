import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Fonts from '../styles/Fonts';
import '../styles/globals.css'

const theme = extendTheme({
  fonts: {
    heading: "Space Mono",
    body: "Space Mono",
  },
  styles: {
    global: {
      body: {
        bg: 'none'
      }
    }
  }
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
