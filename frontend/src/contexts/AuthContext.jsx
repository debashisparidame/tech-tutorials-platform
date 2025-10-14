import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const API_URL = "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = API_URL;

  useEffect(() => {
    const adminData = localStorage.getItem("adminData");
    if (adminData) {
      const parsed = JSON.parse(adminData);
      setAdmin(parsed);
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
    }
    setLoading(false);
  }, []);

  const register = async (username, email, password) => {
    try {
      setError(null);
      const { data } = await axios.post("/admin/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("adminData", JSON.stringify(data));
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setAdmin(data);
      return data;
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed";
      setError(message);
      throw new Error(message);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const { data } = await axios.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminData", JSON.stringify(data));
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setAdmin(data);
      return data;
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      throw new Error(message);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminData");
    delete axios.defaults.headers.common["Authorization"];
    setAdmin(null);
  };

  const value = {
    admin,
    loading,
    error,
    register,
    login,
    logout,
    isAuthenticated: !!admin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
