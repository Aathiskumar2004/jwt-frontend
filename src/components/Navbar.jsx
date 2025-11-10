import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };

  const role = localStorage.getItem("role");

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0 2px 12px rgba(0, 191, 255, 0.2)",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      {/* Left Logo / Title */}
      <h2
        onClick={() => nav("/")}
        style={{
          cursor: "pointer",
          fontWeight: "700",
          letterSpacing: "1px",
          color: "#00bfff",
          textShadow: "0 0 10px rgba(0,191,255,0.7)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ⚡ E-Panel
      </h2>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <span
          onClick={() => nav("/")}
          style={{
            cursor: "pointer",
            fontSize: "15px",
            color: "#fff",
            transition: "color 0.3s ease, text-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#00bfff";
            e.target.style.textShadow = "0 0 10px rgba(0,191,255,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.textShadow = "none";
          }}
        >
          Home
        </span>

        {role === "admin" && (
          <span
            onClick={() => nav("/admin")}
            style={{
              cursor: "pointer",
              fontSize: "15px",
              color: "#fff",
              transition: "color 0.3s ease, text-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#00ff88";
              e.target.style.textShadow = "0 0 10px rgba(0,255,136,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#fff";
              e.target.style.textShadow = "none";
            }}
          >
            Admin
          </span>
        )}

        <span
          onClick={() => nav("/register")}
          style={{
            cursor: "pointer",
            fontSize: "15px",
            color: "#fff",
            transition: "color 0.3s ease, text-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#00bfff";
            e.target.style.textShadow = "0 0 10px rgba(0,191,255,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.textShadow = "none";
          }}
        >
          Register
        </span>

        <span
          onClick={() => nav("/login")}
          style={{
            cursor: "pointer",
            fontSize: "15px",
            color: "#fff",
            transition: "color 0.3s ease, text-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#00bfff";
            e.target.style.textShadow = "0 0 10px rgba(0,191,255,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.textShadow = "none";
          }}
        >
          Login
        </span>

        {/* Logout Button */}
        {localStorage.getItem("accessToken") && (
          <button
            onClick={logout}
            style={{
              padding: "8px 14px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(90deg, #ff4b2b, #ff416c)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s ease",
              boxShadow: "0 0 8px rgba(255,0,0,0.4)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(90deg, #ff6a3d, #ff1e56)";
              e.target.style.boxShadow = "0 0 16px rgba(255,0,0,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(90deg, #ff4b2b, #ff416c)";
              e.target.style.boxShadow = "0 0 8px rgba(255,0,0,0.4)";
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
