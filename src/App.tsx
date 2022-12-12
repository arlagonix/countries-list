import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/GlobalStyle";
import { lightTheme } from "./global/Themes";
import { HashRouter, Route, Routes } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryPage from "./pages/CountryPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App({ hideLoader }: any) {
  useEffect(hideLoader, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <HashRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/*" element={<CountriesList />} />
            <Route path="/:code" element={<CountryPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
