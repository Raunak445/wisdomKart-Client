import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button, message } from "antd";
import {useNavigate} from 'react-router-dom'
import FormCss from './form.module.css'
import MessageBox from "./messageBox";
import axios from 'axios'

const CustomForm = ({ name = "Get in Touch", disable = false, placeholder }) => {
  const navigate=useNavigate()
  
  return (
    <div className={FormCss.formContainer}>
      <h2 className={FormCss.formHeading}>{name}</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          contactNumber: "",
          location: "",
          companyName: "",
          designation: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email format";
          }
          if (!values.contactNumber) {
            errors.contactNumber = "Required";
          }
          
          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submit", values);
          navigate('/')
          axios
            .post("https://wisdomkart-server.onrender.com/api/v1/user/contactUs", { values })
            .then((response) => {
              console.log("Form submitted successfully:", response);
              message.success(response.data.message)
            })
            .catch((error) => {
              console.error("Error submitting form:", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className={FormCss.form}>
            <label htmlFor="fullName" className={FormCss.text}>Full Name*</label>
            <Field
              as={Input}
              type="text"
              name="fullName"
              placeholder="Enter your full name"
            />
            <ErrorMessage name="fullName" component="div" className={FormCss.error}/>

            <label htmlFor="email" className={FormCss.text}>Email*</label>
            <Field
              as={Input}
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <ErrorMessage name="email" component="div" className={FormCss.error} />

            <label htmlFor="contactNumber" className={FormCss.text}>Contact Number*</label>
            <Field
              as={Input}
              type="tel"
              name="contactNumber"
              placeholder="Enter your contact number"
            />
            <ErrorMessage name="contactNumber" component="div" className={FormCss.error} />

            <label htmlFor="location" className={FormCss.text}>City*</label>
            <Field
              as={Input}
              type="text"
              name="location"
              placeholder="Enter your location"
            />
            <ErrorMessage name="location" component="div"  className={FormCss.error}/>

            {!disable && (
              <>
                <label htmlFor="companyName" className={FormCss.text}>Company Name</label>
                <Field
                  as={Input}
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                />
                <ErrorMessage name="companyName" component="div"
               className={FormCss.error}  />

                <label htmlFor="designation"className={FormCss.text}>Designation</label>
                <Field
                  as={Input}
                  type="text"
                  name="designation"
                  placeholder="Enter your designation"
                />
                <ErrorMessage name="designation" component="div" className={FormCss.error}/>
              </>
            )}

            
            <label htmlFor="message" className={FormCss.text}>
      Message*:
      <Field
        as={Input}
        type='text'
        name="message"
        style={{ height: '100px', width: '600px',fontSize: '14px' }}
        placeholder='Type you message here'
    
      />
      <ErrorMessage name="message" component="div" className={FormCss.error} />
    </label>

            <Button
              type="primary"
              htmlType="submit"
              className={FormCss.formSubmit}
              style={{ width: "100%", padding: "10px", textAlign: "center" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
