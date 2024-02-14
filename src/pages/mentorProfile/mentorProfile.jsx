import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Select, TimePicker, message } from "antd";
import style from "./mentorProfile.module.css";
import moment from "moment";
import { hideLoading, showLoading } from "../../redux/features/alert";

// Make sure you import Option from Select component
const { Option } = Select;

const MentorProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [mentor, setMentor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define onFinish function for form submission
  const onFinish = async (values) => {
    try {
      dispatch(showLoading()); // Assuming showLoading and hideLoading are action creators
      const res = await axios.post(
        "http://localhost:8080/api/v1/mentor/updateProfile",
        {
          ...values,
          userId: user._id, timings: [
            moment(values.timings[0],"HH:mm").format("HH:mm"),
            moment(values.timings[1],"HH:mm").format("HH:mm"),
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        message.success("Profile Updated Successfully");
        navigate("/");
      } else {
        message.error("Couldnt Update Profile");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
      message.error(error.message);
    }
  };

  // Define arrays for areas and industries
  const areas = [
    "Leadtime/TAT reduction",
    "Inventory Management",
    // Add other areas here...
  ];

  const industries = [
    "Aerospace/Defence",
    "Automotive",
    // Add other industries here...
  ];

  // Define function to fetch mentor info
  const getMentorInfo = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/mentor/getMentorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMentor(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch mentor info on component mount
  useEffect(() => {
    getMentorInfo();
  }, []);

  // Render the MentorProfile component
  return (
    <div>
      <div className="text-blue">Mentor Profile</div>
      {mentor && (
        <>
          <h3 className={style.text}>Personal Details:</h3>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              ...mentor,
              timings: [
                moment(mentor.timings[0],"HH:mm"),
                moment(mentor.timings[1],"HH:mm"),
              ],
            }}
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
            format="HH:mm"

            style={{ width: "100%" }}
            placeholder={["  Start Time  ", "   End Time"]}
          />
        </Form.Item>

       

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
              <Button type="primary" className={style.btn} htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default MentorProfile;
