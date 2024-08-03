import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])[A-Za-z\d]{8,}$/, "Password must be at least 8 characters long and include at least one uppercase letter.")
    .required("Password is required")
});

export default function Login() {
  const [msgError, setMsgError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Data sent to backend:", values);
        setMsgError("");  
        login();  
        navigate("/");  
      } catch (error) {
        setMsgError("An error occurred while logging in. Please try again.");
      }
      setSubmitting(false);
    }
  });

  return (
    <section className="bg-main-light p-4 rounded my-3 w-75 mx-auto">
      <h1>Login Now</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="alert alert-danger mt-2">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="alert alert-danger mt-2">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="btn-main ms-auto d-block" disabled={formik.isSubmitting || !formik.isValid}>
          {formik.isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
        </button>

        {msgError && <p className="alert alert-danger mt-1">{msgError}</p>}
      </form>
    </section>
  );
}
