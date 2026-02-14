import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import CandidateDashboard from './pages/CandidateDashboard.tsx';
import RecruiterDashboard from './pages/RecruiterDashboard.tsx';
import Jobs from './pages/Jobs.tsx';
import Tips from './pages/Tips.tsx';
import Companies from './pages/Companies.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate" element={<CandidateDashboard />} />
          <Route path="/recruiter" element={<RecruiterDashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/conseils" element={<Tips />} />
          <Route path="/entreprises" element={<Companies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;