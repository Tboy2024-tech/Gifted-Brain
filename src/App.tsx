import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPortal from './components/LoginPortal';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import WelcomeModal from './components/WelcomeModal';
export function App() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Show modal on page load with a slight delay
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <Router>
      <div className="w-full min-h-screen bg-cream-50">
        <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPortal setUserRole={setUserRole} />} />
          <Route path="/student-dashboard/*" element={userRole === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="/teacher-dashboard/*" element={userRole === 'teacher' ? <TeacherDashboard /> : <Navigate to="/login" />} />
          <Route path="/admin-dashboard/*" element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>;
}