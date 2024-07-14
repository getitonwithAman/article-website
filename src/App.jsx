// src/App.jsx
import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticalsForEachCatagory from "./pages/ArticalsForEachCatagory";
import CategoriesPage from "./pages/categoriesPage";
import ArticlePage from "./pages/ArticlePage";
import { articles } from "./Articledata";
import Userdashbord from "./pages/Userdashboard";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const TopArticles = lazy(() => import("./pages/TopArticles"));
// const Categories = lazy(() => import("./pages/Categories"));
const Login = lazy(() => import("./pages/LoginPage"));
const Signup = lazy(() => import("./pages/SignupPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const AdvertisingPage = lazy(() => import("./pages/AdvertisingPage"));



function App() {
    const generateCategoryRoutes = () => {
      // Define your categories here dynamically if needed
      const categories = [
        "Art", "Biology", "Cooking", "Design", "Education", "Finance", "Gardening", 
        "Health", "Innovation", "Journalism", "Knowledge", "Literature", "Music"
      ]; // Example categories

      return categories.map((category, index) => (
        <Route
          key={index}
          path={`/${category.toLowerCase()}`}
          element={<ArticalsForEachCatagory heading={category} />}
        />
      ));
    };

    // console.log(articles);
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        {/* <ToastContainer 
          position="bottom-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="light" 
        /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-articles" element={<TopArticles />} />
          <Route path="/categoriesPage" element={<CategoriesPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Art" element={<ArticalsForEachCatagory heading="Art"/>} /> // how to make a function to activate this path */}
          {generateCategoryRoutes()}
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/advertising" element={<AdvertisingPage />} />
          <Route path="/Userdashboard" element={<Userdashbord />} />
          <Route path={`/${articles[0].title}`} element={<ArticlePage article={articles[0]}/>} /> 
          
          
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
