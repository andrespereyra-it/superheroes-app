import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import useUser from "./hooks/useUser";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Login = () => {
  const navigateHome = useHistory();
  const { login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigateHome.push("/");
    }
  }, [isLogged, navigateHome]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
      ) {
        errors.email = "Wrong email format";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },

    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className="App">
      <div className="App-content">
        <div className="container">
          <div className="box">
            <form onSubmit={formik.handleSubmit} className="loginForm">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="form-control"
                />
                {formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="form-control"
                />
                {formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
