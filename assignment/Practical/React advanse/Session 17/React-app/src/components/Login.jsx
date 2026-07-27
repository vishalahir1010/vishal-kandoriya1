import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button>Login</button>
      </form>

      {submitted && (
        <>
          <h3>Submitted Data</h3>

          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </>
      )}
    </>
  );
}

export default Login;