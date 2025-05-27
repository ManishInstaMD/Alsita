import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-light shadow-sm" id="header">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-md-4">
            <div className="logo">
              <img
                src="/images/logo5.png"
                alt="ALSITA-E"
                width="200px"
              />
            </div>
          </div>
          <div className="col-md-8 d-flex flex-column flex-lg-row justify-content-end align-items-lg-center">
            <nav className="navbar navbar-expand-lg w-100 w-lg-auto">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400, // Lighter weight for non-bold style
                        fontSize: "1.1rem",
                        color: location.pathname === "/" ? "#0d6efd" : "#333",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#0d6efd")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color =
                          location.pathname === "/" ? "#0d6efd" : "#333")
                      }
                    >
                      {t("nav.home")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: "1.1rem",
                        color: location.pathname === "/about" ? "#0d6efd" : "#333",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#0d6efd")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color =
                          location.pathname === "/about" ? "#0d6efd" : "#333")
                      }
                    >
                      {t("nav.knowAbout")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Patient"
                      className={`nav-link ${
                        location.pathname === "/Patient" ? "active" : ""
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: "1.1rem",
                        color: location.pathname === "/Patient" ? "#0d6efd" : "#333",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#0d6efd")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color =
                          location.pathname === "/Patient" ? "#0d6efd" : "#333")
                      }
                    >
                      {t("nav.patientSupport")}
                    </Link>
                  </li>
                  {/* Show Medicine Availability in menu on large screens */}
                  <li className="nav-item d-none d-lg-block">
                    <Link
                      to="/Medicine"
                      className={`nav-link ${
                        location.pathname === "/Medicine" ? "active" : ""
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: "1.1rem",
                        color: location.pathname === "/Medicine" ? "#0d6efd" : "#333",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#0d6efd")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color =
                          location.pathname === "/Medicine" ? "#0d6efd" : "#333")
                      }
                    >
                      {t("nav.medicineAvailability")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Show Medicine Availability outside menu on small screens */}
            <div className="mt-2 d-block d-lg-none">
              <Link
                to="/Medicine"
                className={`nav-link ${
                  location.pathname === "/Medicine" ? "active" : ""
                }`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: location.pathname === "/Medicine" ? "#0d6efd" : "#333",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#0d6efd")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color =
                    location.pathname === "/Medicine" ? "#0d6efd" : "#333")
                }
              >
                {t("nav.medicineAvailability")}
              </Link>
            </div>

            {/* Language selector */}
            <div className="mt-2 mt-lg-0 ms-lg-3">
              <select
                className="form-select"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                value={i18n.resolvedLanguage}
              >
                <option value="en">English</option>
                <option value="bn">Bengali</option>
                <option value="gu">Gujarati</option>
                <option value="hi">Hindi</option>
                <option value="kn">Kannada</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="or">Oriya</option>
                <option value="pa">Punjabi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Import Poppins font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </header>
  );
};

export default Header;