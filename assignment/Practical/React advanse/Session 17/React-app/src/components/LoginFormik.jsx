import { Formik, Form, Field } from "formik";

function LoginFormik() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleChange }) => (
        <Form>

          <h2>Formik Login</h2>

          <Field
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

          <br /><br />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />

          <br /><br />

          <button type="submit">Login</button>

          <h3>Current Values</h3>

          <p>{values.email}</p>
          <p>{values.password}</p>

        </Form>
      )}
    </Formik>
  );
}

export default LoginFormik;