import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../styles/globals.css';
import { ThemeProvider, useTheme } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MainApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

function MainApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-primary text-highlight min-h-screen transition-colors duration-300">
      <NavBar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
