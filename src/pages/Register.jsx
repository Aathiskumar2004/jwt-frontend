import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    adminCode: "",
    imageUrl: "",
  });

  const nav = useNavigate();

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/register", form);
      console.log(res.data);
      alert("Registered successfully!");
      nav("/login");
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
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
          width: "380px",
          textAlign: "center",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(100,149,237,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
        }}
      >
        <h2
          style={{
            color: "#e0e0e0",
            marginBottom: "25px",
            fontSize: "26px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Create Account
        </h2>

        {["name", "email", "password", "imageUrl"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={
              field === "imageUrl"
                ? "Profile Image URL"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            type={field === "password" ? "password" : field === "email" ? "email" : "text"}
            value={form[field]}
            onChange={change}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "14px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              transition: "all 0.2s ease",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6a11cb";
              e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.2)";
              e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
          />
        ))}

        <select
          name="role"
          value={form.role}
          onChange={change}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: "15px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="user" style={{ color: "#000" }}>
            User
          </option>
          <option value="admin" style={{ color: "#000" }}>
            Admin
          </option>
        </select>

        {form.role === "admin" && (
          <input
            name="adminCode"
            placeholder="Admin Code"
            value={form.adminCode}
            onChange={change}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              transition: "all 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2575fc")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.2)")
            }
          />
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            boxShadow: "0 0 15px rgba(101, 78, 163, 0.4)",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "linear-gradient(90deg, #2575fc, #6a11cb)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
            e.target.style.transform = "scale(1)";
          }}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "14px",
            color: "#ccc",
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => nav("/login")}
            style={{
              color: "#6a8bff",
              cursor: "pointer",
              textDecoration: "underline",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#b19fff")}
            onMouseOut={(e) => (e.target.style.color = "#6a8bff")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
