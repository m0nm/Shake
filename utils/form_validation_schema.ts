import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters"),

  cpassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email"),

  password: Yup.string().required("Password is required"),
});
