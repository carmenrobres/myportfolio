import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import AboutPage from './components/pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-brand-light">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;