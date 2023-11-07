"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import RadioButtons from './radioBtn';
import DateOfBirthInput from './dateOfBirth';
type Props = {}

const SignUp = (props: Props) => {
  const router = useRouter();
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [step, setStep] = useState(1);

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

    console.log("values", values);
    const email = values.email;
    const password = values.password

    try {
      // const user = await login(email, password);

      // console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login failed in login file', error);
    }
  };
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required').email('Invalid name'),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    confirmEmail: Yup.string().oneOf([Yup.ref("email"), ''], "Emails must match")
      .required("Confirm Email is required"),
    phone: Yup.string().min(9).required('Phone is required'),
    country: Yup.string().required('country is required'),
    dateOfBirth: Yup.string().required('Date Of Birth is required'),
    reason: Yup.string().required('Reason of registering is required'),
    hearAbout: Yup.string().required('Reason of registering is required'),
    // password: Yup.string().min(8).required('Password is required'),
  });
  const countryOptions = [
    { value: '+1', label: 'United States (+1)' },
    { value: '+44', label: 'United Kingdom (+44)' },
  ];
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
      <Formik
        initialValues={{ email: '', userName: '', confirmEmail: '', phone: '', country: '', dateOfBirth: '', reason: '', hearAbout: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className='card-body'>
              {step === 1 && (
                <>
                  <div className='form-group mb-3'>
                    <label className='mb-2'>User Name</label>
                    <Field type="text" name="userName" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your Name" />
                    <ErrorMessage name="userName" component="div" className="text-red-500" />
                  </div>


                  <div className='form-group mb-3'>
                    <label className='mb-2'>Email</label>
                    <Field type="text" name="email" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Confirm Email</label>
                    <Field type="text" name="confirmEmail" className="w-full border border-gray-300 rounded p-2" placeholder="Re-enter your Email " />
                    <ErrorMessage name="confirmEmail" component="div" className="text-red-500" />
                  </div>


                  <div className='form-group mb-3'>
                    <label className='mb-2'>Phone Number</label>
                    <div className='flex items-center'>
                      <div className='w-2/4'>
                        <Select
                          options={countryOptions}
                          value={selectedCountryCode}
                          onChange={(option: any) => setSelectedCountryCode(option)}
                          placeholder="Country Code"
                        />
                      </div>
                      <div className='w-2/4'>
                        <Field
                          type="text"
                          name="phoneNumber"
                          className="w-full border border-gray-300 rounded p-2"
                          placeholder="Enter your Phone Number"
                        />
                      </div>
                    </div>
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
                  </div>

                  <div className='form-group mb-3'>
                    <label className='mb-2'>Gender</label>
                    <RadioButtons />
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
                    <select className="w-full border border-gray-300 rounded p-2" >
                      <option defaultValue="">Select Option</option>
                      <option value="option1">Pakistan</option>
                      <option value="option2">Afghanistan</option>
                      <option value="option3">India</option>
                      <option value="option4">England</option>
                      <option value="option5">Austrailia</option>
                    </select>
                  </div>


                  <div className='form-group mb-3'>
                    <label className='mb-2'>Date Of Birth</label>
                    <DateOfBirthInput />
                  </div>

                  <div className="form-group mb-3">
                    <label className="block mb-2">Reason of Registering</label>
                    <select className="w-full border border-gray-300 rounded p-2" >
                      <option defaultValue="">Select Option</option>
                      <option value="option1">I am registering to find best partner</option>
                      <option value="option2">I am registering to find my friend a partner</option>
                      <option value="option3">I am registering to find my son a partner</option>
                      <option value="option4">I am registering to find my daughter a partner</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label className="block mb-2">Where did you hear about us?</label>
                    <select className="w-full border border-gray-300 rounded p-2" >
                      <option defaultValue="">Select Option</option>
                      <option value="option1">From Internet</option>
                      <option value="option2">From Facebook</option>
                      <option value="option3">From Linkdin</option>
                      <option value="option4">From</option>
                    </select>
                  </div>
                  <div className='text-center mt-5'>
                    <button className="login-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white" type="submit">Sign up</button>
                  </div>
                  <div className="flex items-center mt-2">
                    <hr className="flex-1 border-t border-black" />
                    <span className="px-2">OR</span>
                    <hr className="flex-1 border-t border-black" />
                  </div>
                  <div className='text-center mt-2'>
                    <button className="google-btn border border-gray-300 rounded-full" >
                      <i className="fa-brands fa-google me-1" style={{ color: ' #c61010' }}></i>
                      Sign up with Google</button>
                  </div>
                  <div className='text-center mt-2'>
                    <button className="facebook-btn border border-gray-300 rounded-full" >
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
              {/* <div className='form-group'>
                <label className='mb-2'>Password</label>
                <Field type="password" name="password" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div> */}

            </div>
          </Form>
        )}
      </Formik>

      <div className='text-center mt-5'>
        <span>Already have an account?<a className='cursor-pointer text-red-500' onClick={() => router.push('/login')}>Log In</a></span>
      </div>
    </div >
    // <div><button onClick={()=>router.push('/login')}>Sign Up</button></div>
  )
}
export default SignUp