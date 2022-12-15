import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/GlobalStyle";
import { darkTheme, lightTheme } from "./global/Themes";
import { HashRouter, Route, Routes } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryPage from "./pages/CountryPage";
import useLocalStorage from "./hooks/useLocalStorage";
import useMediaQuery from "./hooks/useMediaQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App({ hideLoader }: any) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("isDarkMode", prefersDarkMode);
  const themeToggler = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };
  useEffect(hideLoader, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <HashRouter>
          <GlobalStyle />
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Navigation themeToggleHandler={themeToggler} />
                  <CountriesList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/:code"
              element={
                <>
                  <Navigation themeToggleHandler={themeToggler} />
                  <CountryPage />
                  <Footer />
                </>
              }
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
