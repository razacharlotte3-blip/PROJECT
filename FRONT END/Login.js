import { useState } from "react";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (role) => {
    setMsg("");
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ email, password, role })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("currentUser", JSON.stringify(data));
        setMsg("✅ Login successful!");
        window.location.href = data.role === "admin" ? "/admin-dashboard" : "/dashboard";
      } else {
        setMsg("❌ " + data.error);
      }
    } catch {
      setMsg("❌ Server error.");
    }
  };

  return (
    <div className="form-box" id="login-box">
      <h2>Welcome Back!</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <div className="password-wrapper">
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <div className="btn-group">
        <button onClick={() => handleLogin("user")}>Login as User</button>
        <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      </div>

      <p>Don't have an account? <a href="#" onClick={onSwitch}>Register</a></p>
      <p className="message">{msg}</p>
    </div>
  );
}

export default Login;
