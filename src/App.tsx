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
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();

function App({ hideLoader }: any) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("isDarkMode", prefersDarkMode);
  const themeToggler = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(hideLoader, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme}>
        <SkeletonTheme
          baseColor={currentTheme.colors.skeleton.baseColor}
          highlightColor={currentTheme.colors.skeleton.highlightColor}
        >
          <HashRouter>
            <GlobalStyle />
            <Navigation themeToggleHandler={themeToggler} isDarkMode={isDarkMode} />
            <Routes>
              <Route path="/*" element={<CountriesList />} />
              <Route path="/:code" element={<CountryPage />} />
            </Routes>
            <Footer />
          </HashRouter>
        </SkeletonTheme>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
