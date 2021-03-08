import { createGlobalStyle, ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import '../styles/globals.css'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
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
