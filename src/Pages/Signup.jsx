import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { name, email, password });
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <UserPlus style={styles.icon} />
          <h2 style={styles.title}>Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.rememberMe}>
            <input type="checkbox" id="remember" style={styles.checkbox} />
            <label htmlFor="remember" style={styles.rememberLabel}>Remember me</label>
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "400px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    height: "32px",
    width: "32px",
    color: "#38a169",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "10px",
    color: "#6B46C1", // Violet color
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#4A5568", // Grayish color
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #CBD5E0",
    outline: "none",
    fontSize: "16px",
    backgroundColor: "#EDF2F7", // Light gray background
    color: "#2D3748", // Dark gray text
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    height: "16px",
    width: "16px",
    marginRight: "8px",
  },
  rememberLabel: {
    fontSize: "14px",
    color: "#4A5568",
  },
  button: {
    backgroundColor: "#38A169",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s, box-shadow 0.2s",
  },
  footer: {
    fontSize: "14px",
    color: "#718096",
    textAlign: "center",
    marginTop: "16px",
  },
  link: {
    color: "#6B46C1", // Violet color for link
    fontWeight: "bold",
  },
};

export default Signup;
