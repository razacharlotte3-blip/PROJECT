
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text">
          <h1>💜 HeartGuard AI</h1>
          <h2>
            Your AI-Powered <span className="highlight">Health Guardian</span>
          </h2>
          <p>
            Monitor heart rate and stress levels in real-time with wearable
            sensors. Get instant alerts, AI-powered insights, and personalized
            health recommendations.
          </p>
          <div className="hero-buttons">
            <a href="#login-box" className="btn primary">Start Monitoring</a>
            <button className="btn secondary">Watch Demo</button>
          </div>
          <div className="hero-tags">
            <span style={{ color: "green" }}>🟢 24/7 Monitoring</span>
            <span style={{ color: "blue" }}>🔵 AI Analysis</span>
            <span style={{ color: "purple" }}>🟣 Instant Alerts</span>
          </div>
        </div>
        <div className="image">
          <img
            src="/assets/wearable.png"
            alt="Wearable AI Monitoring"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
