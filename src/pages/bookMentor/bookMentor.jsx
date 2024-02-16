import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./bookMentor.module.css";
import { Form, TimePicker, Input, Select, Button,DatePicker,message } from "antd";
import moment from "moment";
import {showLoading,hideLoading} from '../../redux/features/alert'
const BookMentor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [time, setTime] = useState("12:08");
  const format = "HH:mm";
  const [date, setDate] = useState();
  const disabledDate = (current) => {
    // Disable all dates before today
    return current && current < moment().startOf("day");
  };

  const onFinish = async (values) => {
    try {
       dispatch(showLoading());

      const res = await axios.post(
        "/api/v1/user/bookMentor",
        {
          ...values,
          userId: user._id,
          timings: time,
          date:date
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

       dispatch(hideLoading());

      if (res.data.success) {
        message.success("Mentor request form send successfully");
        navigate("/");
      } else {
        message.error("Cannot send Mentor request form");
      }
    } catch (error) {
     dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
      message.error(error.message);
    }
  };

  const areas = [
    "Leadtime/TAT reduction",
    " Inventory Management ",
    " Quality Improvement",
    " Productivity Improvement",
    " Cost Reduction",
    "Work Culture Improvement",
    " Employee Engagement",
    " People development",
    " Delivery Management",
    "Asset/Equipment Management",
    "Machine Breakdown reduction",
    "  Safety, Health & Environment",
    " Professional /Career Growth",
    "Visual Management",
    "Process Management",
    "Goal setting",
    "  Business Strategies",
    " Value Stream Management",
    "Startup Coaching",
    " Business Turnaround",
    " Business Plan",
    " Mid Career Growth",
  ];

  const country = [
    "India",
    "United States",
    "China",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Philippines",
    "Vietnam",
    "Ethiopia",
    "Egypt",
    "DR Congo",
    "Iran",
    "Turkey",
    "Germany",
    "France",
  ];

  const language = ["Hindi", "English"];

  const industries = [
    " Aerospace/Defence",
    " Automotive",
    "Food",
    "Pharma",
    "Retail",
    "Education",
    "Healthcare",
    " Restaurants/Hotels/Hospitality",
    " Healthcare/Hospitals",
    " Supply Chain & Logistics",
    "Real estate/Construction",
    "Heavy Machineries",
    "Foundry",
    "Forging",
    "Banking & Finance",
    "Agriculture",
    " IT/ITES/Software",
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
  return (
    <div className={style.wrapper}>
      <h2 className="text-blue">Help me Find a Mentor</h2>
      <p className={style.text}>Get first one hour slot Free</p>
      {/* <h3 className='text-blue'>Personal Details:</h3> */}
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        // autoComplete="off"
      >
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
        <Form.Item
          label="Company"
          name="company"
          // rules={[{ required: true, message: "Address is required" }]}
        >
          <Input />
        </Form.Item>

        {/* <h3 className='text-blue'>Professional Details:</h3> */}

        <Form.Item
          label="Area"
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
          label="Industry"
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
          label="Country"
          name="country"
          rules={[{ required: true, message: "Country" }]}
        >
          <Select mode="single" placeholder="Select or type to add country">
            {country.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Language"
          name="language"
          rules={[{ required: true, message: "Language is required" }]}
        >
          <Select mode="single" placeholder="Select or type to add language">
            {language.map((language) => (
              <Option key={language} value={language}>
                {language}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Date" name="date"
         rules={[{ required: true, message: "Date is required" }]}>
          <DatePicker
            format="DD-MM-YYYY"
            className="m-2"
            style={{ width: "100%" }}
            onChange={(value) => {
              setDate(moment(value).format("DD-MM-YYYY"));
            }}
            disabledDate={disabledDate}
            
          />
        </Form.Item>

       
        <Form.Item
          label="Choose Time slot for Mentorship"
          name="timings"
          rules={[{ required: true, message: "Work timings are required" }]}
        >
          <TimePicker
            format={format}
            value={moment(time, format)}
            onChange={(value, dateString) => {
              // console.log("Time", value, dateString);
              setTime(dateString);
            }}
            style={{ width: "100%" }}
            placeholder={["Start Time"]}
            // Set the value to update the TimePicker's selected times
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookMentor;
