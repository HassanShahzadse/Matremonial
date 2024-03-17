import * as yup from "yup";

export const signupSchema =yup.object({
    userName:yup
    .string()
    .required("Name is required")
    .matches(
        /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
        "Invalid characters. Please enter only letters and special characters."
    ),
    email:yup
    .string()
    .email("Invalid email format") 
    .required("Email is required"),
    confirmEmail:yup
    .string()
    .oneOf([yup.ref("email"), ""], "Emails must match")
    .required("Confirm email is required"),
    password:yup
    .string()
    .required("Password is required")
    .min(8,"Password must be atleast 8 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
    gender:yup
    .string()
    .required("Gender is required")
    ,
    country:yup
    .string()
    .required("Country is required"),
    dateOfBirth: yup
    .string()
    .required("Date of birth is required"),
    reason_for_registering:yup
    .string()
    .required("Reason for Registering is required"),
    heard_about_us:yup
    .string()
    .required("Field is required"),
    phone: yup
    .string()
    .min(9)
    .required("Phone number is required"),
});