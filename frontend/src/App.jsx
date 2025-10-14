import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Hero from "./components/Hero";
import TutorialSection from "./components/TutorialSection";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { tutorialData } from "./data/tutorials";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreatePost from "./pages/admin/CreatePost";
import ManagePosts from "./pages/admin/ManagePosts";
import EditPost from "./pages/admin/EditPost";

// Public Pages
import BlogList from "./pages/public/BlogList";
import BlogDetail from "./pages/public/BlogDetail";

// Home Component with SubHeader
const Home = () => (
  <>
    <SubHeader />
    <Hero />
    <div className="px-4 mt-16 space-y-16">
      {tutorialData.map((section, index) => (
        <TutorialSection
          key={index}
          title={section.category}
          items={section.items}
        />
      ))}
    </div>
    <PromoSection />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen font-sans transition-colors duration-300 bg-white dark:bg-[#212121]">
            <Routes>
              {/* Admin Routes - No Header/Footer */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/register" element={<AdminRegister />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/posts/create"
                element={
                  <ProtectedRoute>
                    <CreatePost />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/posts/manage"
                element={
                  <ProtectedRoute>
                    <ManagePosts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/posts/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditPost />
                  </ProtectedRoute>
                }
              />

              {/* Public Routes - With Header/Footer, SubHeader only on Home */}
              <Route
                path="/*"
                element={
                  <>
                    <Header />
                    <main className="w-full py-8">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<BlogList />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                      </Routes>
                    </main>
                    <Footer />
                    <ScrollToTopButton />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
