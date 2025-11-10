import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    confirm("User deleted");
    loadUsers();
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          color: "#00bfff",
          textShadow: "0 0 10px rgba(0,191,255,0.6)",
          letterSpacing: "1px",
        }}
      >
        👑 Admin Panel
      </h2>

      {users.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#bbb",
          }}
        >
          No users found
        </p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "20px",
              marginBottom: "18px",
              boxShadow: "0 0 12px rgba(0,191,255,0.15)",
              width: "400px",
              margin: "20px auto",
              backdropFilter: "blur(10px)",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 25px rgba(0,191,255,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 12px rgba(0,191,255,0.15)")
            }
          >
            <p
              style={{
                fontSize: "17px",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              <strong>Name:</strong> {user.name}
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#aaa",
                marginBottom: "16px",
              }}
            >
              <strong>Role:</strong>{" "}
              <span
                style={{
                  color:
                    user.role === "admin"
                      ? "#00ff88"
                      : "rgba(0,191,255,0.9)",
                }}
              >
                {user.role}
              </span>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button
                onClick={() => nav(`/edit/${user._id}`)}
                style={{
                  flex: 1,
                  background: "linear-gradient(90deg, #007bff, #00bfff)",
                  color: "white",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                  boxShadow: "0 0 8px rgba(0,191,255,0.4)",
                }}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #0096ff, #0066cc)";
                  e.target.style.boxShadow =
                    "0 0 18px rgba(0,191,255,0.6)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #007bff, #00bfff)";
                  e.target.style.boxShadow =
                    "0 0 8px rgba(0,191,255,0.4)";
                }}
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => deleteUser(user._id)}
                style={{
                  flex: 1,
                  background: "linear-gradient(90deg, #ff4b2b, #ff416c)",
                  color: "white",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                  boxShadow: "0 0 8px rgba(255,0,0,0.4)",
                }}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #ff6a3d, #ff1e56)";
                  e.target.style.boxShadow =
                    "0 0 18px rgba(255,0,0,0.6)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #ff4b2b, #ff416c)";
                  e.target.style.boxShadow =
                    "0 0 8px rgba(255,0,0,0.4)";
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
