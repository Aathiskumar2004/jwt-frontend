import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);
      nav(res.data.role === "admin" ? "/admin" : "/");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          padding: "40px 30px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          width: "340px",
          textAlign: "center",
          color: "white",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 150, 255, 0.4)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)")
        }
      >
        <h2
          style={{
            marginBottom: "25px",
            fontSize: "26px",
            color: "#00bfff",
            letterSpacing: "1px",
          }}
        >
          Welcome Back
        </h2>

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "white",
            fontSize: "14px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) =>
            (e.target.style.border = "1px solid #00bfff")
          }
          onBlur={(e) =>
            (e.target.style.border = "1px solid rgba(255,255,255,0.2)")
          }
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "white",
            fontSize: "14px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) =>
            (e.target.style.border = "1px solid #00bfff")
          }
          onBlur={(e) =>
            (e.target.style.border = "1px solid rgba(255,255,255,0.2)")
          }
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #00bfff, #007bff)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(0,191,255,0.3)",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "linear-gradient(90deg, #0096ff, #0056b3)";
            e.target.style.boxShadow = "0 0 20px rgba(0,191,255,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "linear-gradient(90deg, #00bfff, #007bff)";
            e.target.style.boxShadow = "0 0 10px rgba(0,191,255,0.3)";
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "18px", fontSize: "14px", color: "#aaa" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => nav("/register")}
            style={{
              color: "#00bfff",
              cursor: "pointer",
              textDecoration: "underline",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#00bfff")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
