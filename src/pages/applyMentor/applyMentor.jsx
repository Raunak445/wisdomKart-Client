import { useState } from "react";
import { Form, Input, Button, Select, message, TimePicker } from "antd";
import style from "./applyMentor.module.css";
const { Option } = Select;
import moment from "moment"; // Import moment library for time format
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../../redux/features/alert";

import axios from "axios";
import TextArea from "antd/es/input/TextArea";
// import BinaryImage from "../../components/BinaryImage";
// import FormData from 'form-data'

const ApplyMentor = () => {

 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [timeMon, setTimeMon] = useState("12:08");
  const [timeTue, setTimeTue] = useState("12:08");
  const [timeWed, setTimeWed] = useState("12:08");
  const [timeThur, setTimeThur] = useState("12:08");
  const [timeFri, setTimeFri] = useState("12:08");
  const [timeSat, setTimeSat] = useState("12:08");
  const [timeSun, setTimeSun] = useState("12:08");

  const format = "hh:mm A";

  // const onFinish = async (values) => {
  //   try {
  //     console.log(values);
  //     console.log(timeMon);
  //     console.log(timeTue);
  //     console.log(timeWed);
  //     console.log(image)

  //     // dispatch(showLoading());

  //     const res = await axios.post(
  //       "http://localhost:8080/api/v1/user/applyMentor",
  //       {
  //         ...values,
  //         userId: user._id,
  //         timeMon: timeMon,
  //         timeTue,
  //         timeWed,
  //         timeThur,
  //         timeFri,
  //         timeSat,
  //         timeSun,
  //         image:image
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );

  //     // dispatch(hideLoading());

  //     if (res.data.success) {
  //       message.success("Applied for Mentor Successfully");
  //       // navigate("/");
  //     } else {
  //       message.error("Could not apply for Mentor");
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //     message.error("Something went wrong");
  //     message.error(error.message);
  //   }
  // }
  



  const onFinish = async (values) => {
    try {
      // Convert image to binary format
      const reader = new FileReader()

   
     
      
      
      reader.readAsDataURL(image); // Read the file as a data URL

      // console.log(image)

      reader.onload = async () => {
        const imageData = reader.result.split(",")[1]; // Extract the base64-encoded image data

        

        try {
          const res = await axios.post(
            "http://localhost:8080/api/v1/user/applyMentor",
            {
              ...values,
              userId: user._id,
              image: imageData, // Send the binary image data
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json", // Set Content-Type header for JSON data
              },
            }
          );

          if (res.data.success) {
            message.success("Applied for Mentor Successfully");
            navigate("/");
          } else {
            message.error("Could not apply for Mentor");
          }

          if(res.statusCode>200){
            message.error("Something went wrong")
          }

        } catch (error) {
          // dispatch(hideLoading());
          console.error(error);
          message.error("Something went wrong");
          message.error(error.message);
        }
      };
    } catch (error) {
      // dispatch(hideLoading());
      console.error(error);
      message.error("Something went wrong");
      message.error(error.message);
    }
  };

  // const onFinish = async (values) => {
  //   try {
  //     const formData = new FormData(values);

  //     // formData.append('image', image);
  //     // Append the image file to the form data
  //     console.log(values)

  //     // Append other form fields
  //     // formData.append('firstName', values.firstName);
  //     // formData.append('lastName', values.lastName);
  //     // formData.append('phone', values.phone);
  //     // formData.append('email', values.email);
  //     // formData.append('address', values.address);
  //     // formData.append('biodata', values.biodata);
  //     // formData.append('experience', values.experience);
  //     // formData.append('feesPerConsultation', values.feesPerConsultation);
  //     // formData.append('area', values.area);
  //     // formData.append('industry', values.industry);
  //     // formData.append('languages', values.languages);
  //     // formData.append('socialMedia', values.socialMedia);
  //     // formData.append('mondayTime', timeMon);
  //     // formData.append('tuesdayTime', timeTue);
  //     // formData.append('wednesdayTime', timeWed);
  //     // formData.append('thursdayTime', timeThur);
  //     // formData.append('fridayTime', timeFri);
  //     // formData.append('saturdayTime', timeSat);
  //     // formData.append('sundayTime', timeSun);

  //     // dispatch(showLoading());

  //     console.log(formData)
  //     console.log(formData.values.firstName)

  //     const res = await axios.post(
  //       "http://localhost:8080/api/v1/user/applyMentor",
  //     {name:"Raunak"}, // Use formData as the request body
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           // "Content-Type": "multipart/form-data", // Set Content-Type header for file upload
  //         },
  //       }
  //     );

  //     // dispatch(hideLoading());

  //     if (res.data.success) {
  //       message.success("Applied for Mentor Successfully");
  //       // navigate("/");
  //     }
  //     else {
  //       message.error("Could not apply for Mentor");
  //     }

  //   } catch (error) {
  //     // dispatch(hideLoading());
  //     console.error(error);
  //     message.error("Something went wrong");
  //     message.error(error.message);
  //   }
  // };

  const areas = [
    "Leadtime/TAT reduction",
    "Inventory Management ",
    "Quality Improvement",
    "Productivity Improvement",
    "Cost Reduction",
    "Work Culture Improvement",
    "Employee Engagement",
    "People development",
    "Delivery Management",
    "Asset/Equipment Management",
    "Machine Breakdown reduction",
    "Safety, Health & Environment",
    "Professional /Career Growth",
    "Visual Management",
    "Process Management",
    "Goal setting",
    "Business Strategies",
    "Value Stream Management",
    "Startup Coaching",
    "Business Turnaround",
    "Business Plan",
    "Mid Career Growth",
  ];

  const industries = [
    "Aerospace/Defence",
    "Automotive",
    "Food",
    "Pharma",
    "Retail",
    "Education",
    "Healthcare",
    "Restaurants/Hotels/Hospitality",
    "Healthcare/Hospitals",
    "Supply Chain & Logistics",
    "Real estate/Construction",
    "Heavy Machineries",
    "Foundry",
    "Forging",
    "Banking & Finance",
    "Agriculture",
    "IT/ITES/Software",
    "Service Industry",
    "General Engineering",
    "NGO",
    "Government",
    "Packaging",
    "Apparel/Garment Manufacturing",
    "Textile",
    "Chemical Manufacturing",
    "Energy/Power",
  ];

  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    // Check if file format and size are valid
    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      // console.log(file)
      setImage(file);

      message.success(`${file.name} uploaded successfully`);
    } else {
      setImage(null);
      if (!allowedTypes.includes(file.type)) {
        message.error("Please upload a JPEG or PNG file.");
      } else if (file.size > maxSize) {
        message.error("File size exceeds 2 MB limit.");
      }
    }
  };
  const languages = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Odia",
    "Punjabi",
    "Malayalam",
    "Assamese",
  ];

  return (
    // social media profile
    // Biodata

    <div className={style.bg}>


      <div className={style.wrapper}>
        <h2 className={style.heading}>Register As Mentor</h2>
        <h3 className={style.text}>Personal Details:</h3>

    

        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          onFinish={onFinish}
          // encType="multipart/form-data"
          // autoComplete="off"
        >
          {/* <input type="file" name="image" onChange={handleImage}/> */}

          <Form.Item
            label="Profile Image"
            name="image"
            rules={[{ required: true, message: "First Name is required" }]}
            className={style.item}
          >
            <Input type="file" name="image" onChange={handleImage} />
          </Form.Item>

          {/* 
          <Form.Item
          name='image'
          rules={[
            {
              required: true,
              message: 'input Image',
            },
          ]}
        >
          <Upload
            beforeUpload={(file) => {
              // console.log(file);
              return false;
            }}
            onChange={handleChange}
            multiple={false}
            listType='picture'
            defaultFileList={state.fileList}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item> */}

          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "First Name is required" }]}
            className={style.item}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Last Name is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input />
          </Form.Item>

          <h3 className={style.text}>Professional Details:</h3>

          <div className={style.subtext}>
            Highlight your credentials, achievements, and how you can help. We
            recommend you keep it between 200-500 characters{" "}
          </div>
          <Form.Item
            name="biodata"
            label="Biodata"
            rules={[
              {
                required: true,
                message: "Please enter your bio data",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Experience (In years)"
            name="experience"
            rules={[{ required: true, message: "Experience is required" }]}
          >
            <Input />
          </Form.Item>

          {/* Check if usd is possible */}
          <Form.Item
            label="Fees per Hour(In INR)"
            name="feesPerConsultation"
            rules={[{ required: true, message: "Fees is required" }]}
          >
            <Input type="number" min="0" />
          </Form.Item>

          {/* Others option */}
          <Form.Item
            label="Area Of Specialization"
            name="area"
            rules={[{ required: true, message: "Area is required" }]}
          >
            <Select mode="multiple" placeholder="Select or type to add areas">
              {areas.map((area) => (
                <Option key={area} value={area}>
                  {area}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="industry_others"
            label="Others(Area of Specialization)"
          >
            <TextArea
              rows={2}
              placeholder="Please write other industry if not mentioned in drop down use , to separate for example :- Legal,Accounting,Design"
            />
          </Form.Item>

          {/* others option  */}
          <Form.Item
            label="Industry Specialization"
            name="industry"
            rules={[{ required: true, message: "Industry is required" }]}
          >
            <Select
              mode="multiple"
              placeholder="Select or type to add industries"
            >
              {industries.map((industry) => (
                <Option key={industry} value={industry}>
                  {industry}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="industry_others"
            label="Others(Industry of specialization)"
          >
            <TextArea
              rows={2}
              placeholder="Please write other industry if not mentioned in drop down use , to separate for example :-  Energy,Media,Tech"
            />
          </Form.Item>

          <Form.Item
            label="Languages proficient in"
            name="languages"
            rules={[{ required: true, message: "Language is required " }]}
          >
            <Select
              mode="multiple"
              placeholder="Select or type to add industries"
            >
              {languages.map((lang) => (
                <Option key={lang} value={lang}>
                  {lang}
                </Option>
              ))}
            </Select>
          </Form.Item>
{/* 
          <Form.Item name="language_others" label="Others(Language)">
            <TextArea
              rows={2}
              placeholder="Please write other languages if not mentioned in drop down use , to separate for example :-  Chinese,Japanese,French"
            />
          </Form.Item> */}

          <Form.Item
            label="Social Media Profile Link"
            name="socialMedia"
            // rules={[
            //   { required: true, message: 'Please enter your social media profile link' },
            //   { type: 'url', message: 'Please enter a valid URL' },
            // ]}
          >
            <Input placeholder="Enter your social media profile link" />
          </Form.Item>

          <div className={style.text}>Preferred Timings</div>
          <div className={style.subtext}>
            Please leave unpreferred days of weeks as blank
          </div>
          <Form.Item
            label="Monday"
            name="mondayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeMon, format)}
              onChange={(value, dateString) => {
                setTimeMon(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Tuesday "
            name="tuesdayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeTue, format)}
              onChange={(value, dateString) => {
                setTimeTue(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Wednesday"
            name="wednesdayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeWed, format)}
              onChange={(value, dateString) => {
                setTimeWed(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Thursday"
            name="thursdayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeThur, format)}
              onChange={(value, dateString) => {
                setTimeThur(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Firday"
            name="fridayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeFri, format)}
              onChange={(value, dateString) => {
                setTimeFri(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Saturday"
            name="saturdayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeSat, format)}
              onChange={(value, dateString) => {
                setTimeSat(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          <Form.Item
            label="Sunday"
            name="sundayTime"
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(timeSun, format)}
              onChange={(value, dateString) => {
                setTimeSun(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />
          </Form.Item>

          {/*          
            {
              daysOfWeek.map((day,index)=>{
                return (
                  
          <Form.Item
          key={index}
          label={day}
          name={day}
            // rules={[{ required: true, message: "Work timings are required" }]}
          >
            <TimePicker.RangePicker
              format={format}
              value={moment(time, format)}
              onChange={(value, dateString) => {
                setTime(dateString);
              }}
              style={{ width: "100%" }}
              placeholder={["Start Time", "End Time"]}
              // Set the value to update the TimePicker's selected times
            />

          </Form.Item>
                )
              })
            } */}

          {/* {daysOfWeek.map((day, index) => (
            <DayTimePicker
              key={index}
              day={day}
              time={time}
              setTime={setTime}
              format={format}
            />
          ))} */}

          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ApplyMentor;
