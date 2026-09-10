import "./auth.css";

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <form className="auth-form">
          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="auth-btn">Register</button>
        </form>

        <p className="auth-footer">
          Already have an account? <span onClick={() => window.location.href = '/login'}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;