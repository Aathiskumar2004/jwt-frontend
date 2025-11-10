import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();

  const styles = {
    container: {
      height: "100vh",
      width: "100%",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden",
      position: "relative",
    },
    glow: {
      position: "absolute",
      width: "300px",
      height: "300px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50%",
      filter: "blur(80px)",
      animation: "float 6s ease-in-out infinite alternate",
    },
    title: {
      fontSize: "8rem",
      fontWeight: "900",
      letterSpacing: "5px",
      margin: "0",
      color: "#fff",
      textShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
      animation: "bounce 1.5s infinite ease-in-out",
    },
    subtitle: {
      fontSize: "2rem",
      marginTop: "10px",
      fontWeight: "500",
      color: "#e0e0e0",
      animation: "fadeIn 1.5s ease forwards",
    },
    text: {
      fontSize: "1.1rem",
      marginTop: "15px",
      maxWidth: "400px",
      lineHeight: "1.6",
      color: "#b5b5b5",
      animation: "fadeIn 2s ease forwards",
    },
    button: {
      marginTop: "30px",
      padding: "12px 28px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#0f2027",
      backgroundColor: "#fff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
      transition: "transform 0.2s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0% { transform: translateY(0) translateX(-50px); }
            100% { transform: translateY(-50px) translateX(50px); }
          }

          button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);
          }

          @media (max-width: 600px) {
            h1 { font-size: 5rem !important; }
            h2 { font-size: 1.5rem !important; }
            p { font-size: 1rem !important; max-width: 300px !important; }
          }
        `}
      </style>

      <div style={styles.glow}></div>

      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button style={styles.button} onClick={() => nav("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
