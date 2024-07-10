import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticalsForEachCatagory from "./pages/ArticalsForEachCatagory";
import CategoriesPage from "./pages/categoriesPage";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const TopArticles = lazy(() => import("./pages/TopArticles"));
// const Categories = lazy(() => import("./pages/Categories"));
const Login = lazy(() => import("./pages/LoginPage"));
const Signup = lazy(() => import("./pages/SignupPage"));

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
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
