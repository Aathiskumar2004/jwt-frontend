import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await api.get(`/profile/${id}`);
      setForm(res.data);
      console.log(res.data);
    };
    getUser();
  }, [id]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, form);
    nav("/admin");
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
        color: "white",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0, 191, 255, 0.2)",
          width: "360px",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 0 35px rgba(0,191,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(0,191,255,0.2)";
        }}
      >
        <h2
          style={{
            color: "#00bfff",
            marginBottom: "25px",
            fontSize: "26px",
            fontWeight: "600",
            textShadow: "0 0 12px rgba(0,191,255,0.7)",
          }}
        >
          ✏️ Edit User
        </h2>

        <input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={change}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: "15px",
            outline: "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#00bfff";
            e.target.style.boxShadow = "0 0 10px rgba(0,191,255,0.5)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
            e.target.style.boxShadow = "none";
          }}
        />

        <input
          placeholder="Image URL"
          name="imageUrl"
          value={form.imageUrl}
          onChange={change}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "22px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: "15px",
            outline: "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#00bfff";
            e.target.style.boxShadow = "0 0 10px rgba(0,191,255,0.5)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
            e.target.style.boxShadow = "none";
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #007bff, #00bfff)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(0,191,255,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background =
              "linear-gradient(90deg, #0096ff, #0066cc)";
            e.target.style.boxShadow = "0 0 20px rgba(0,191,255,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.background =
              "linear-gradient(90deg, #007bff, #00bfff)";
            e.target.style.boxShadow = "0 0 10px rgba(0,191,255,0.3)";
          }}
        >
          💾 Save Changes
        </button>

        <button
          type="button"
          onClick={() => nav("/admin")}
          style={{
            marginTop: "14px",
            width: "100%",
            padding: "10px",
            background: "linear-gradient(90deg, #6c757d, #495057)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 8px rgba(255,255,255,0.2)",
          }}
          onMouseOver={(e) => {
            e.target.style.background =
              "linear-gradient(90deg, #868e96, #343a40)";
            e.target.style.boxShadow = "0 0 15px rgba(255,255,255,0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.background =
              "linear-gradient(90deg, #6c757d, #495057)";
            e.target.style.boxShadow = "0 0 8px rgba(255,255,255,0.2)";
          }}
        >
          ✖ Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
