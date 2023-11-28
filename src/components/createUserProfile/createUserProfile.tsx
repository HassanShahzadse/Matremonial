"use client"
import RadioButtons from "@/utils/shared/radioBtn";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';


const martialStatusOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Never Married" },
    { value: "option2", label: "Legally Seperated" },
    { value: "option3", label: "Divorced" },
    { value: "option4", label: "Widowed " },
    { value: "option5", label: "Anulled" },
];
const lookingToMarryOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "As Soon As Possible" },
    { value: "option2", label: "This Year" },
    { value: "option3", label: "Next Year" },
    { value: "option4", label: "Not Sure " },
];
const livingArrangementsOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Live with Family" },
    { value: "option2", label: "Seperate" },
    { value: "option3", label: "Alone" },
];
const myBuildOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Normal" },
    { value: "option2", label: "Muscular" },
    { value: "option3", label: "Fat" },
    { value: "option4", label: "Slim" },
];
const doISmokeOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "No" },
    { value: "option2", label: "Yes" },
    { value: "option3", label: "Special Occasion" },
    { value: "option4", label: "Sometimes" },
];
const religiuosnessOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Muslim" },
    { value: "option2", label: "Christian" },
    { value: "option3", label: "Hindu" },
    { value: "option4", label: "Sikh" },
];
const mySectOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Only Muslim" },
    { value: "option2", label: "Wahabi" },
    { value: "option3", label: "Suni" },
    { value: "option4", label: "Shia" },
];
const keepHalalOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Yes" },
    { value: "option2", label: "No" },
    { value: "option3", label: "Sometimes" },
];
const partnerLocationOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Does not Matter" },
    { value: "option2", label: "Pakistan" },
    { value: "option3", label: "Canada" },
    { value: "option4", label: "England" },
    { value: "option5", label: "China" },
];
const partnerReligionOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Does not Matter" },
    { value: "option2", label: "Muslim" },
    { value: "option3", label: "Hindu" },
    { value: "option4", label: "Christian" },
];
const partnerSectOptions = [
    { value: "", label: "Select Option" },
    { value: "option1", label: "Does not Matter" },
    { value: "option2", label: "Only Muslim" },
    { value: "option3", label: "Suni" },
    { value: "option4", label: "Shia" },
];
const radioGenderOptions = ['Male', 'Female', 'Non-Binary'];
const radioHaveChildrenOptions = ['Yes', 'No', 'Maybe'];
const radioWearHijabOptions = ['Yes', 'No', 'Occasionally'];
const radioPreferBeardOptions = ['Yes', 'No', 'Trend'];
const radioPayZakatOptions = ['Yes', 'No', 'Sometimes'];
const radioFastRamadanOptions = ['Yes', 'No', 'A few'];
export default function CreateProfile() {
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState({
        headline: '',
        aboutMe: '',
        educationLevel: '',
        jobTitle: '',
        profession: '',
        motherTongue: '',
        secondLanguage: '',
        gender: '',
        citizenship: '',
        income: '',
        willingToRelocate: '',
        haveChildren: '',
        likeHaveChildren: '',
        martialStatus: '',
        lookingToMarry: '',
        livingArrangements: '',
        myHeight: '',
        hairColor: '',
        myBuild: '',
        doISmoke: '',
        anyDisabilitites: '',
        religiuosness: '',
        mySect: '',
        revert: '',
        keepHalal: '',
        wearHijab: '',
        preferBeard: '',
        performSalaah: '',
        payZakat: '',
        fastRamadan: '',
        partnerLocation: '',
        partnerReligion: '',
        partnerSect: '',
        partnerEducation: '',
        partnerProfession: '',
        describePartner: '',
        profileImage: '',
        morePics: ''

    });
    const validationSchema = Yup.object().shape({
        userName: Yup.string(),
        email: Yup.string().email("Invalid email address"),
        country: Yup.string(),
        dateOfBirth: Yup.string(),
        reason: Yup.string(),
        hearAbout: Yup.string(),
    });
    const handleSubmit = async (values: any) => {
        console.log("Form Values in handle submit", formValues);
        let data = {
            headline: formValues.headline,
            aboutMe: formValues.aboutMe,
            educationLevel: formValues.educationLevel,
            jobTitle: formValues.jobTitle,
            profession: formValues.profession,
            motherTongue: formValues.motherTongue,
            secondLanguage: formValues.secondLanguage,
            gender: formValues.gender,
            citizenship: formValues.citizenship,
            income: formValues.income,
            willingToRelocate: formValues.willingToRelocate,
            haveChildren: formValues.haveChildren,
            likeHaveChildren: formValues.likeHaveChildren,
            martialStatus: formValues.martialStatus,
            lookingToMarry: formValues.lookingToMarry
        }
        // try {
        //   const user = await createUser(data);
        //   router.push('/login'); 
        // } catch (error) {
        //   console.error('Login failed in login file', error);
        // }
    };
    const handleFormChange = (fieldName: string, value: any) => {
        setFormValues((prevFormValues) => {
            const updatedFormValues = { ...prevFormValues, [fieldName]: value };
            return updatedFormValues;
        });
    };
    return (
        <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                <Form>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-3">
                            <div className="card bg-white p-6 rounded-25 shadow-custom-dark mx-auto md:fixed md:top-0 md:left-0 md:w-1/4 md:ml-4">
                                <h1 className="text-2xl font-bold text-center">Profile</h1>
                                <div className='card-body'>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Upload Profile Image</label>
                                        <Field type="file" name="profileImage" className="w-full border border-gray-300 rounded-25 p-2"
                                            onChange={(e: any) => {
                                                setFieldValue('profileImage', e.target.value)
                                                handleFormChange('profileImage', e.target.value);
                                            }}
                                        />
                                        <ErrorMessage name="profileImage" component="div" className="text-red-500" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Add More Pics</label>
                                        <Field type="file" name="morePics" className="w-full border border-gray-300 rounded-25 p-2"
                                            onChange={(e: any) => {
                                                setFieldValue('morePics', e.target.value)
                                                handleFormChange('morePics', e.target.value);
                                            }}
                                        />
                                        <ErrorMessage name="morePics" component="div" className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-9">
                            <div className="card bg-white p-6 rounded-25 shadow-custom-dark mx-auto">
                                <h1 className="text-2xl font-bold text-center">Personal Info</h1>
                                <div className='card-body'>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>My Citizenship</label>
                                        <Field type="text" name="citizenship" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter your Citizenship"
                                            onChange={(e: any) => {
                                                setFieldValue('citizenship', e.target.value)
                                                handleFormChange('citizenship', e.target.value);
                                            }}
                                        />
                                        <ErrorMessage name="citizenship" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>My Income</label>
                                        <Field type="text" name="income" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter your income"
                                            onChange={(e: any) => {
                                                setFieldValue('income', e.target.value)
                                                handleFormChange('income', e.target.value);
                                            }} />
                                        <ErrorMessage name="income" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Willing to Relocate</label>
                                        <Field type="text" name="willingToRelocate" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Willing To Relocate"
                                            onChange={(e: any) => {
                                                setFieldValue('willingToRelocate', e.target.value)
                                                handleFormChange('willingToRelocate', e.target.value);
                                            }} />
                                        <ErrorMessage name="willingToRelocate" component="div" className="text-red-500" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do I have Children</label>
                                        <Field type="text" name="haveChildren" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter"
                                            onChange={(e: any) => {
                                                setFieldValue('haveChildren', e.target.value)
                                                handleFormChange('haveChildren', e.target.value);
                                            }} />
                                        <ErrorMessage name="haveChildren" component="div" className="text-red-500" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Mother Tongue</label>
                                        <Field type="text" name="motherTongue" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter your Mother Tongue"
                                            onChange={(e: any) => {
                                                setFieldValue('motherTongue', e.target.value)
                                                handleFormChange('motherTongue', e.target.value);
                                            }} />
                                        <ErrorMessage name="motherTongue" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Would I Like to have Children</label>
                                        <RadioButtons
                                            options={radioHaveChildrenOptions}
                                            selectedOption={formValues.likeHaveChildren}
                                            onOptionChange={(value: any) => handleFormChange('likeHaveChildren', value)}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Martial Status</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.martialStatus}
                                            onChange={(e) => {
                                                handleFormChange('martialStatus', e.target.value)
                                            }}>
                                            {martialStatusOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Looking To Marry</label>
                                        <select className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.lookingToMarry}
                                            onChange={(e) => {
                                                handleFormChange('lookingToMarry', e.target.value)
                                            }}>
                                            {lookingToMarryOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Living Arrangements</label>
                                        <select className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.livingArrangements}
                                            onChange={(e) => handleFormChange('livingArrangements', e.target.value)}>
                                            {livingArrangementsOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white p-6 rounded-25 shadow-custom-dark mx-auto">
                                <h1 className="text-2xl font-bold text-center">Body Type</h1>
                                <div className='card-body'>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>My Height</label>
                                        <Field type="text" name="myHeight" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Height"
                                            onChange={(e: any) => {
                                                setFieldValue('myHeight', e.target.value)
                                                handleFormChange('myHeight', e.target.value);
                                            }}
                                        />
                                        <ErrorMessage name="myHeight" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>My Hair Color</label>
                                        <Field type="text" name="hairColor" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Hair Color"
                                            onChange={(e: any) => {
                                                setFieldValue('hairColor', e.target.value)
                                                handleFormChange('hairColor', e.target.value);
                                            }} />
                                        <ErrorMessage name="hairColor" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>My Eyes Color</label>
                                        <Field type="text" name="eyesColor" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Eyes Color"
                                            onChange={(e: any) => {
                                                setFieldValue('eyesColor', e.target.value)
                                                handleFormChange('eyesColor', e.target.value);
                                            }} />
                                        <ErrorMessage name="eyesColor" component="div" className="text-red-500" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="block mb-2">My Build</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.myBuild}
                                            onChange={(e) => {
                                                handleFormChange('myBuild', e.target.value)
                                            }}>
                                            {myBuildOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Do I Smoke</label>
                                        <select className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.doISmoke}
                                            onChange={(e) => {
                                                handleFormChange('doISmoke', e.target.value)
                                            }}>
                                            {doISmokeOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do I Have Any Disabilitites</label>
                                        <textarea name="anyDisabilitites" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Any Disabilitites" rows={5}
                                            onChange={(e: any) => {
                                                setFieldValue('anyDisabilitites', e.target.value)
                                                handleFormChange('anyDisabilitites', e.target.value);
                                            }} />
                                        <ErrorMessage name="anyDisabilitites" component="div" className="text-red-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white p-6 rounded-25 shadow-custom-dark mx-auto">
                                <h1 className="text-2xl font-bold text-center">Religion</h1>
                                <div className='card-body'>

                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Religiuosness</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.religiuosness}
                                            onChange={(e) => {
                                                handleFormChange('religiuosness', e.target.value)
                                            }}>
                                            {religiuosnessOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="block mb-2">My Sect</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.mySect}
                                            onChange={(e) => {
                                                handleFormChange('mySect', e.target.value)
                                            }}>
                                            {mySectOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Are you a Revert?</label>
                                        <Field type="text" name="revert" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter"
                                            onChange={(e: any) => {
                                                setFieldValue('revert', e.target.value)
                                                handleFormChange('revert', e.target.value);
                                            }}
                                        />
                                        <ErrorMessage name="revert" component="div" className="text-red-500" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Do You Keep Halal?</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.keepHalal}
                                            onChange={(e) => {
                                                handleFormChange('keepHalal', e.target.value)
                                            }}>
                                            {keepHalalOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do you wear a Hijab/Niqab?</label>
                                        <RadioButtons
                                            options={radioWearHijabOptions}
                                            selectedOption={formValues.wearHijab}
                                            onOptionChange={(value: any) => handleFormChange('wearHijab', value)}
                                        />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do you prefer a beard?</label>
                                        <RadioButtons
                                            options={radioPreferBeardOptions}
                                            selectedOption={formValues.preferBeard}
                                            onOptionChange={(value: any) => handleFormChange('preferBeard', value)}
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do you perform Salaah?</label>
                                        <RadioButtons
                                            options={radioWearHijabOptions}
                                            selectedOption={formValues.performSalaah}
                                            onOptionChange={(value: any) => handleFormChange('performSalaah', value)}
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do you pay Zakat?</label>
                                        <RadioButtons
                                            options={radioPayZakatOptions}
                                            selectedOption={formValues.payZakat}
                                            onOptionChange={(value: any) => handleFormChange('payZakat', value)}
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Do you fast in Month of Ramadan?</label>
                                        <RadioButtons
                                            options={radioFastRamadanOptions}
                                            selectedOption={formValues.fastRamadan}
                                            onOptionChange={(value: any) => handleFormChange('fastRamadan', value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white p-6 rounded-25 shadow-custom-dark mx-auto">
                                <h1 className="text-2xl font-bold text-center">Type of Partner Your Looking for</h1>
                                <div className='card-body'>
                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Partner Location</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.partnerLocation}
                                            onChange={(e) => {
                                                handleFormChange('partnerLocation', e.target.value)
                                            }}>
                                            {partnerLocationOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Partner Religion</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.partnerReligion}
                                            onChange={(e) => {
                                                handleFormChange('partnerReligion', e.target.value)
                                            }}>
                                            {partnerReligionOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="block mb-2">Partner Sect</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-25 p-2"
                                            value={formValues.partnerSect}
                                            onChange={(e) => {
                                                handleFormChange('partnerSect', e.target.value)
                                            }}>
                                            {partnerSectOptions.map((option) => (
                                                <option key={option.value} value={option.label}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Partner Education</label>
                                        <Field type="text" name="partnerEducation" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Partner Education"
                                            onChange={(e: any) => {
                                                setFieldValue('partnerEducation', e.target.value)
                                                handleFormChange('partnerEducation', e.target.value);
                                            }} />
                                        <ErrorMessage name="partnerEducation" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Partner Profession</label>
                                        <Field type="text" name="partnerProfession" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Partner Profession"
                                            onChange={(e: any) => {
                                                setFieldValue('partnerProfession', e.target.value)
                                                handleFormChange('partnerProfession', e.target.value);
                                            }} />
                                        <ErrorMessage name="partnerProfession" component="div" className="text-red-500" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Describe Type of Partner</label>
                                        <textarea name="describePartner" className="w-full border border-gray-300 rounded-25 p-2" placeholder="Enter Partner Type" rows={5}
                                            onChange={(e: any) => {
                                                setFieldValue('describePartner', e.target.value)
                                                handleFormChange('describePartner', e.target.value);
                                            }} />
                                        <ErrorMessage name="describePartner" component="div" className="text-red-500" />
                                    </div>
                                </div>
                            </div>

                            <div className='text-center mt-5'>
                                <button type="submit" className="login-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white"
                                >Create</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}