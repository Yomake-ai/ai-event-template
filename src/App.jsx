import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import LegacyPage from './pages/LegacyPage.jsx';
import { pageRoutes } from './pageContent.js';
import { useLegacyScripts } from './hooks/useLegacyScripts.js';

export default function App() {
  useLegacyScripts();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {pageRoutes.map(({ path, html }) => (
          <Route key={path} path={path} element={<LegacyPage html={html} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
