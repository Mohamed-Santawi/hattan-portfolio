import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  CareerAdvisor,
  BirkmanAssessment,
  InterviewSkillsTrainer,
} from "./Services";
import { Home } from "./components/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <LanguageProvider>
          <BrowserRouter>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
              <Toaster 
                position="top-center"
                toastOptions={{
                  duration: 3000,
                  style: {
                    fontFamily: '"Emad-Arabic", sans-serif',
                    direction: 'rtl'
                  }
                }}
              />
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                
                {/* Blog Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
                {/* Service Routes */}
                <Route path="/services/birkman" element={<BirkmanAssessment />} />
                <Route path="/Services/Birkman" element={<Navigate to="/services/birkman" replace />} />
                <Route path="/Services/birkman" element={<Navigate to="/services/birkman" replace />} />
                <Route path="/services/Birkman" element={<Navigate to="/services/birkman" replace />} />
                
                <Route path="/services/interview" element={<InterviewSkillsTrainer />} />
                <Route path="/Services/Interview" element={<Navigate to="/services/interview" replace />} />
                <Route path="/Services/interview" element={<Navigate to="/services/interview" replace />} />
                <Route path="/services/Interview" element={<Navigate to="/services/interview" replace />} />
                
                <Route path="/services/career-advising" element={<CareerAdvisor />} />
                <Route path="/Services/CareerAdvising" element={<Navigate to="/services/career-advising" replace />} />
                <Route path="/Services/Career-Advising" element={<Navigate to="/services/career-advising" replace />} />
                <Route path="/Services/career-advising" element={<Navigate to="/services/career-advising" replace />} />
                <Route path="/services/CareerAdvising" element={<Navigate to="/services/career-advising" replace />} />
                <Route path="/services/Career-Advising" element={<Navigate to="/services/career-advising" replace />} />
                
                {/* Catch all route - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
