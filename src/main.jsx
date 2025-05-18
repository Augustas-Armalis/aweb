import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import HomePage from './index.jsx';
import Terms from './assets/pages/Terms.jsx';
import Privacy from './assets/pages/Privacy.jsx';
import Newsletter from './assets/pages/Newsletter.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import Giveaway1 from './assets/pages/Giveaways/giveaway1.jsx';
import HereIsWhere from './assets/pages/HereIsWhere.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/terms">Terms</Link> |{' '}
            <Link to="/privacy">Privacy</Link> |{' '}
            <Link to="/newsletter">Newsletter</Link> |{' '}
            <Link to="/giveaways/giveaway1">Giveaway1</Link> |{' '}
            <Link to="/hereiswhere">HereIsWhere</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/giveaways/giveaway1" element={<Giveaway1 />} />
            <Route path="/hereiswhere" element={<HereIsWhere />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);