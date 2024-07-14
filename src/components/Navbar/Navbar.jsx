import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ loginStatus }) => {
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else if (window.scrollY <= 50) {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here, e.g., navigate to search results page or filter articles
    console.log("Search Query:", searchQuery);
    // Example: Navigate to search results page
    // history.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery(""); // Clear search input after submission
  };

  return (
    <Navbar fixed="top" expand="md" className={isFixed ? "navbar fixed" : "navbar"}>
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          <h1 className="logo">Jade</h1>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpand(!expand)}
        />

        <Navbar.Collapse id="basic-navbar-nav" className={`${expand ? "show" : ""}`}>
          <Nav className="ms-auto">
            <Form onSubmit={handleSearch} className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button class="my-search" variant="outline-success" type="submit">
                Search
              </Button>
            </Form>

            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
                onClick={() => setExpand(false)}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Top Articles Page"
                className={`navbar-link ${location.pathname === "/top-articles" ? "active" : ""}`}
                to="/top-articles"
                onClick={() => setExpand(false)}
              >
                Top Articles
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Top Articles Page"
                className={`navbar-link ${location.pathname === "/User-Dashboard" ? "active" : ""}`}
                to="/Userdashboard"
                onClick={() => setExpand(false)}
              >
                Post
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Categories Page"
                className={`navbar-link ${location.pathname === "/categories" ? "active" : ""}`}
                to="/categoriesPage"
                onClick={() => setExpand(false)}
              >
                Categories
              </Link>
            </Nav.Item>

            {loginStatus ? (
              <Nav.Item>
                <Link
                  aria-label="Go to Account Page"
                  className={`navbar-link ${location.pathname === "/account" ? "active" : ""}`}
                  to="/account"
                  onClick={() => setExpand(false)}
                >
                  Account
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link
                  aria-label="Go to Login Page"
                  className={`navbar-link ${location.pathname === "/login" ? "active" : ""}`}
                  to="/login"
                  onClick={() => setExpand(false)}
                >
                  Login/Signup
                </Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
