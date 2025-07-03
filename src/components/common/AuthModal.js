import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LOGIN_USER, REGISTER_USER } from "../../../queries/mutations";
import { useAuth } from "@/context/AuthContext";

const AuthModal = ({ show, onClose, defaultTab = "login" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerUser, { loading: regLoading }] = useMutation(REGISTER_USER);
  const [loginUser, { loading: loginLoading }] = useMutation(LOGIN_USER);
  const { login } = useAuth();
  if (!show) return null;

  // Login handler
  const onLogin = async (formData) => {
    try {
      const { data } = await loginUser({
        variables: {
          username: formData.username,
          password: formData.password,
        },
      });

      login(data.loginUser.token); // 👈 use AuthContext
      toast.success(`Welcome back, ${data.loginUser.user.username}!`);
      reset();
      onClose();
      router.push("/");
    } catch (err) {
      toast.error("Login failed: Invalid username or password.");
    }
  };
  // Signup handler
  const onSignup = async (formData) => {
    try {
      const { data } = await registerUser({
        variables: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      });

      toast.success("Registration successful! Please log in.");
      setActiveTab("login");
      reset();
    } catch (err) {
      toast.error("Signup failed: Username or email may already exist.");
    }
  };

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
                  onClick={() => {
                    setActiveTab("login");
                    reset();
                  }}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "signup" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("signup");
                    reset();
                  }}
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
              <form className="auth-form" onSubmit={handleSubmit(onLogin)}>
                <h4 className="mb-3 fw-bold text-center">Welcome Back!</h4>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && (
                    <small className="text-danger">
                      {errors.username.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
                  disabled={loginLoading}
                >
                  {loginLoading ? "Logging in..." : "Login"}
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleSubmit(onSignup)}>
                <h4 className="mb-3 fw-bold text-center">Create Account</h4>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && (
                    <small className="text-danger">
                      {errors.username.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Min 6 characters" },
                    })}
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-bold"
                  disabled={regLoading}
                >
                  {regLoading ? "Signing up..." : "Sign Up"}
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
