"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import RadioButtons from '../../utils/shared/radioBtn';
import DateOfBirthInput from '../../utils/dateOfBirth/dateOfBirth';
import { createUser, signupWithFacebook, signupWithGoogle } from '@/sharedService/auth/auth';
type Props = {}



const countryOption = [
  { value: "", label: "Select Option" },
  { value: "option1", label: "Pakistan" },
  { value: "option2", label: "Afghanistan" },
  { value: "option3", label: "India" },
  { value: "option4", label: "England" },
  { value: "option5", label: "Australia" },
];
const registeringOptions = [
  { value: "", label: "Select Option" },
  { value: "option1", label: "I am registering to find best partner" },
  { value: "option2", label: "I am registering to find my friend a partner" },
  { value: "option3", label: "I am registering to find my son a partner" },
  { value: "option4", label: "I am registering to find my daughter a partner" },
];
const hearAboutOptions = [
  { value: "", label: "Select Option" },
  { value: "option1", label: "From Internet" },
  { value: "option2", label: "From Facebook" },
  { value: "option3", label: "From Linkdin" },
  { value: "option4", label: "From Youtube" },
];
const countryCodeOptions = [
  { value: '+1', label: 'United States (+1)' },
  { value: '+44', label: 'United Kingdom (+44)' },
];
const SignUp = (props: Props) => {
  const router = useRouter();
  const [selectedCountryCode, setSelectedCountryCode] = useState();
  const [step, setStep] = useState(1);

  const [formValues, setFormValues] = useState({
    email: '',
    userName: '',
    confirmEmail: '',
    password: '',
    phone: '',
    selectedCountryCode: '',
    country: '',
    dateOfBirth: '',
    reason: '',
    hearAbout: '',
    gender: '',
  });

  const handleFormChange = (fieldName: string, value: any) => {
    setFormValues((prevFormValues) => {
      const updatedFormValues = { ...prevFormValues, [fieldName]: value };
      return updatedFormValues;
    });
  };


  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSubmit = async (values: any) => {
    console.log("Form Values in handle submit", formValues);
    let data = {
      email: formValues.email,
      name: formValues.userName,
      password: formValues.password,
      phone_number: formValues.phone,
      country: formValues.country,
      birth_date: formValues.dateOfBirth,
      reason_for_registering: formValues.reason,
      heard_about_us: formValues.hearAbout,
      gender: formValues.gender
    }
    try {
      const user = await createUser(data);
      router.push('/login'); 
    } catch (error) {
      console.error('Login failed in login file', error);
    }
  };
  useEffect(() => {
  }, [formValues]);
  const handleGoogleSignup = async () => {
    try {
      const user = await signupWithGoogle();
      console.log('Signed up with Google:', user);
      router.push('/login'); 
    } catch (error) {
      console.error('Google signup error:', error);
    }
  };
  const handleFacebookSignup = async () => {
    try {
      const user = await signupWithFacebook();
      console.log('Signed up with Facebook:', user);
      router.push('/login'); 
    } catch (error) {
      console.error('Facebook signup error:', error);
    }
  };
  const validationSchema = Yup.object().shape({
    userName: Yup.string(),
    email: Yup.string().email("Invalid email address"),
    confirmEmail: Yup.string().oneOf([Yup.ref("email"), ''], "Emails must match"),
    password: Yup.string().min(8).required('Password is required'),
    phone: Yup.string().min(9),
    country: Yup.string(),
    dateOfBirth: Yup.string(),
    reason: Yup.string(),
    hearAbout: Yup.string(),
    // userName: Yup.string().required('Name is required'),
    // email: Yup.string().email("Invalid email address").required("Email is required"),
    // confirmEmail: Yup.string().oneOf([Yup.ref("email"), ''], "Emails must match")
    //   .required("Confirm Email is required"),
    // phone: Yup.string().min(9).required('Phone is required'),
    // country: Yup.string().required('country is required'),
    // dateOfBirth: Yup.string().required('Date Of Birth is required'),
    // reason: Yup.string().required('Reason of registering is required'),
    // hearAbout: Yup.string().required('Reason of registering is required'),
    // password: Yup.string().min(8).required('Password is required'),
  });

  return (
    <div className="card bg-white p-6 rounded-lg shadow-md mx-auto">
      {step === 1 && (
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      )}
      {step === 2 && (
        <div className='flex'>
          <div className='previous-btn'>
            <button type="button" onClick={handlePreviousStep} className="prev-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white"
            ><i className="fas fa-arrow-left me-1"></i>
              Previous
            </button>
          </div>

          <div className='flex justify-center'>
            <h1 className="text-2xl font-bold">Sign Up</h1>
          </div>
        </div>
      )}
      <div className='card-body'>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ handleChange, handleSubmit, values, setFieldValue }) => (

            <Form>

              {step === 1 && (
                <>
                  <div className='form-group mb-3'>
                    <label className='mb-2'>User Name</label>
                    <Field type="text" name="userName" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your Name"
                      onChange={(e: any) => {
                        setFieldValue('userName', e.target.value)
                        handleFormChange('userName', e.target.value);
                      }}
                    />
                    <ErrorMessage name="userName" component="div" className="text-red-500" />
                  </div>


                  <div className='form-group mb-3'>
                    <label className='mb-2'>Email</label>
                    <Field type="text" name="email" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your email"
                      onChange={(e: any) => {
                        setFieldValue('email', e.target.value)
                        handleFormChange('email', e.target.value);
                      }} />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Confirm Email</label>
                    <Field type="text" name="confirmEmail" className="w-full border border-gray-300 rounded p-2" placeholder="Re-enter your Email "
                      onChange={(e: any) => {
                        setFieldValue('confirmEmail', e.target.value)
                        handleFormChange('confirmEmail', e.target.value);
                      }} />
                    <ErrorMessage name="confirmEmail" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Password</label>
                    <Field type="text" name="password" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your password"
                      onChange={(e: any) => {
                        setFieldValue('password', e.target.value)
                        handleFormChange('password', e.target.value);
                      }} />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Phone Number</label>
                    <div className='flex items-center'>
                      <div className='w-2/4'>
                        
                        <Select
                          options={countryCodeOptions}
                          value={selectedCountryCode}
                          onChange={(option: any) =>  handleFormChange('selectedCountryCode', option.label)}
                          placeholder="Country Code"
                        />
                      </div>
                      <div className='w-2/4'>
                        <Field
                          type="text"
                          name="phone"
                          className="w-full border border-gray-300 rounded p-2"
                          placeholder="Enter your Phone Number"
                          onChange={(e: any) => {
                            setFieldValue('phone', e.target.value)
                            handleFormChange('phone', e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Gender</label>
                    <RadioButtons
                      selectedOption={formValues.gender}
                      onOptionChange={(value: any) => handleFormChange('gender', value)}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="login-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="form-group mb-3">
                    <label className="block mb-2">Where do you Live?</label>
                    <select
                      className="w-full border border-gray-300 rounded p-2"
                      value={formValues.country}
                      onChange={(e) => {
                        handleFormChange('country', e.target.value)
                      }}>
                      {countryOption.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className='form-group mb-3'>
                    <label>Date Of Birth</label>
                    <DateOfBirthInput
                      dateOfBirth={formValues.dateOfBirth}
                      onDateOfBirthChange={(dateOfBirth) => handleFormChange('dateOfBirth', dateOfBirth)}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="block mb-2">Reason of Registering</label>
                    <select className="w-full border border-gray-300 rounded p-2"
                      value={formValues.reason}
                      onChange={(e) => {
                        handleFormChange('reason', e.target.value)
                      }}>
                      {registeringOptions.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label className="block mb-2">Where did you hear about us?</label>
                    <select className="w-full border border-gray-300 rounded p-2"
                      value={formValues.hearAbout}
                      onChange={(e) => handleFormChange('hearAbout', e.target.value)}>
                      {hearAboutOptions.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='text-center mt-5'>
                    <button type="submit" className="login-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white"
                    >Sign up</button>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>


        {step === 2 && (
          <>
            <div className="flex items-center mt-2">
              <hr className="flex-1 border-t border-black" />
              <span className="px-2">OR</span>
              <hr className="flex-1 border-t border-black" />
            </div>
            <div className='text-center mt-2'>
              <button className="google-btn border border-gray-300 rounded-full" onClick={handleGoogleSignup}>
                <i className="fa-brands fa-google me-1" style={{ color: ' #c61010' }}></i>
                Sign up with Google</button>
            </div>
            <div className='text-center mt-2'>
              <button className="facebook-btn border border-gray-300 rounded-full" onClick={handleFacebookSignup}>
                <i className="fa-brands fa-facebook me-1" style={{ color: 'rgb(19 16 198)' }}></i>
                Sign up with Facebook</button>
            </div>
            <div className='text-center mt-2'>
              <button className="google-btn border border-gray-300 rounded-full" >
                <i className="fa-brands fa-apple me-1" style={{ color: 'rgb(28 27 27)' }}></i>
                Sign up with Apple ID</button>
            </div>
          </>
        )}
      </div>

      <div className='text-center mt-5'>
        <span>Already have an account?<a className='cursor-pointer text-red-500' onClick={() => router.push('/login')}>Log In</a></span>
      </div>
    </div >
  )
}
export default SignUp


