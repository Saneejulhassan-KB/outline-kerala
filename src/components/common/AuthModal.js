import React, { useState } from "react";
import PropTypes from "prop-types";

const AuthModal = ({ show, onClose, defaultTab = "login" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow-lg border-0">
          <div className="modal-header border-0 pb-0">
            <ul className="nav nav-tabs w-100 justify-content-center border-0">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "login" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "signup" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body p-4">
            {activeTab === "login" ? (
              <form className="auth-form">
                <h4 className="mb-3 fw-bold text-center">Welcome Back!</h4>
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="small text-decoration-none">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
                >
                  Login
                </button>
              </form>
            ) : (
              <form className="auth-form">
                <h4 className="mb-3 fw-bold text-center">Create Account</h4>
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-bold"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  defaultTab: PropTypes.oneOf(["login", "signup"]),
};

export default AuthModal;
