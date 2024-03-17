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

export const  addprofileSchema = yup.object({
    gender:yup     
    .string()
    .required("Gender is required"),
    education:yup
    .string()
    .required("Education is required"),
    job:yup
    .string()
    .required("Education is required"),
    tongue:yup
    .string()
    .required("Mother tongue is required"),
    citizenship:yup
    .string()
    .required("Citizenship is required"),
    income:yup
    .string()
    .required("Income is required"),
    martialStatus:yup
    .string()
    .required("Martlal Status is required"),
    children:yup
    .string()
    .required("Children is required"),
    livingArrange:yup
    .string()
    .required("Living Arrangement is required"),
    buildCont:yup
    .string()
    .required("Body Ttpe is required"),
    smokeFreq:yup
    .string()
    .required("Field is required"),
    disability:yup
    .string()
    .required("Field is required"), 
    religion:yup
    .string()
    .required("Field is required"),
    sect:yup
    .string()
    .required("Field is required"),
    halal:yup
    .string()
    .required("Education is required"),
    salah:yup
    .string()
    .required("Field is required"),
    partnerReligion:yup
    .string()
    .required("Field is required"),
    partnerSect:yup
    .string()
    .required("Field is required"),
    partnerType:yup
    .string()
    .required("Field is required"),

})