import { createGlobalStyle, ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import '../styles/globals.css'
import {wrapper} from '../store/store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#e3e3e3",
  },
};

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);