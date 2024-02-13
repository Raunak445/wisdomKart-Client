import React from "react";
import { useFormik } from "formik";
import FormCss from './form.module.css'

import MessageBox from "./messageBox";
const Form = ({name="Get in Touch",disable=false,placeholder}) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      location: "",
      companyName: "",
      designation: "",
    },
    onSubmit: (values) => {
     axios.post('ur;')
      console.log(values);
    },

    validate:values=>{
      let errors={
      }
      
      if(!values.fullName){
        errors.name="Required"
      }
      
      if(!values.email){
        errors.email="Required"
      }
      else if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email format"
      }

      if(!values.contactNumber){
        errors.contactNumber="Required"
      }


      return errors
    }
  });

  console.log("form values ", formik.values);

  return (
    <div className={FormCss.formContainer}>
      <h2 className={FormCss.formHeading}>{name}</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Full Name*:
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your full name"
            required
          />
        </label>

        <label>
          Email*:
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your email address"
            required
          />
        </label>

        <label>
          Contact Number*:
          <input
            type="tel"
            name="contactNumber"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your contact number"
            required
          />
        </label>

        <label>
          City*:
          <input
            type="text"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your location"
            required
          />
        </label>

       
{
  !disable && (
    <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your company name"
          />
        </label>

  )

}

    {!disable && (

      <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={FormCss.formInput}
            placeholder="Enter your designation"
          />
        </label>


    )}      
      
      
      
      
      
        <MessageBox
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
        />
      

        <button type="submit" className={FormCss.formSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
