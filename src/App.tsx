import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import GlobalStyle from "./global/GlobalStyle";
import CountryPage from "./pages/CountryPage";
import CountriesList from "./pages/CountriesList";
import { useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global/Themes";
import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
          <Navigation themeToggleHandler={themeToggler} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/*" element={<CountriesList />} />
            <Route path="/:code" element={<CountryPage />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
