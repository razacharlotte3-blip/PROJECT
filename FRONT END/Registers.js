import { useState } from "react";

function Register({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setMsg("❌ Passwords do not match!");
      return;
    }
    try {
      const res = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✅ Registration successful!");
        setTimeout(onSwitch, 1500);
      } else {
        setMsg("⚠️ " + data.error);
      }
    } catch {
      setMsg("❌ Server error.");
    }
  };

  return (
    <div className="form-box" id="register-box">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" onClick={onSwitch}>Login</a></p>
      <p className="message">{msg}</p>
    </div>
  );
}

export default Register;
