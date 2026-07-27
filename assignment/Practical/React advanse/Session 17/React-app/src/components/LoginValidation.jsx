import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginValidation() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>

        <h2>Login Form</h2>

        <Field
          type="email"
          name="email"
          placeholder="Email"
        />

        <ErrorMessage
          name="email"
          component="div"
          style={{ color: "red" }}
        />

        <br />

        <Field
          type="password"
          name="password"
          placeholder="Password"
        />

        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        <br />

        <button type="submit">Login</button>

      </Form>
    </Formik>
  );
}

export default LoginValidation;