import "./auth.css";

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>

        <form className="auth-form">
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <span onClick={() => window.location.href = '/register'}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;