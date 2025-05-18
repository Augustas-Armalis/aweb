import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './index.jsx';
import Terms from './assets/pages/Terms.jsx';
import Privacy from './assets/pages/Privacy.jsx';
import Newsletter from './assets/pages/Newsletter.jsx';
import NotFound from './assets/pages/NotFound.jsx';

import Giveaway1 from './assets/pages/Giveaways/giveaway1.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/giveaways/giveaway1" element={<Giveaway1 />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>
);