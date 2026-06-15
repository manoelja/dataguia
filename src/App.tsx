import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { FilterProvider } from './hooks/useFilter';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import './styles/global.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <FilterProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category/:slug" element={<DetailPage />} />
            </Routes>
          </Router>
        </FilterProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
