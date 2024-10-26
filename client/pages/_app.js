import NavBar from '../components/NavBar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
const dotenv = require('dotenv');

require('dotenv').config();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="bg-primary text-highlight min-h-screen transition-colors duration-300">
        <NavBar />
        <main className="p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
