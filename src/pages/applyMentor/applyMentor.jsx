import React from "react";
import { Form, Input, Button, Select, TimePicker, message } from "antd";
import style from "./applyMentor.module.css";
const { Option } = Select;
import moment from "moment"; // Import moment library for time format
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/features/alert";
import axios from "axios";

const ApplyMentor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/applyMentor",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        message.success("Applied for Mentor Successfully");
        navigate("/");
      } else {
        message.error("Couldnt Apply for Mentor");
      }
    } catch (error) {
      dispatch(hideLoading());

      console.log(error);
      message.error("Something went wrong");
      message.error(error.message)  
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
      <h2 className={style.heading}>Register As Mentor</h2>
      <h3 className={style.text}>Personal Details:</h3>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        autoComplete="off"
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

        <h3 className={style.text}>Professional Details:</h3>

        <Form.Item
          label="Experience"
          name="experience"
          rules={[{ required: true, message: "Experience is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Fees per Consultation"
          name="feesPerConsultation"
          rules={[{ required: true, message: "Fees is required" }]}
        >
          <Input type="number" />
        </Form.Item>

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
          label="Work Timings"
          name="timings"
          rules={[{ required: true, message: "Work timings are required" }]}
        >
          <TimePicker.RangePicker
            format="hh:mm A"
            use12Hours
            style={{ width: "100%" }}
            placeholder={["  Start Time  ", "   End Time"]}
            defaultOpenValue={[
              moment("09:00", "hh:mm A"),
              moment("18:00", "hh:mm A"),
            ]}
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

export default ApplyMentor;
