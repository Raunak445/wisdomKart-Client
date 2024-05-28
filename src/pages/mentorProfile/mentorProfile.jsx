import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Select, TimePicker, message, Spin } from "antd";
import style from "./mentorProfile.module.css";
import moment from "moment";
import { hideLoading, showLoading } from "../../redux/features/alert";
import { useCookies } from "react-cookie";

// Make sure you import Option from Select component
const { Option } = Select;
const format = "hh:mm A";

const MentorProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [mentor, setMentor] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 6 * 1024 * 1024; // 2 MB

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
        message.error("File size exceeds 6 MB limit.");
      }
    }
  };

  const formatTime = (timeArray) => {
    if (!timeArray || !Array.isArray(timeArray) || timeArray.length === 0) {
      return ""; // Return empty string if timeArray is invalid or empty
    }

    // Map each time string in the array to the desired format
    const formattedTimes = timeArray.map((time) => {
      return moment(time).format("hh:mm A"); // Format time as "12-hour:minutes AM/PM"
    });

    // Join the formatted times with a comma and space
    return formattedTimes.join(", ");
  };
  const [timeMon, setTimeMon] = useState(null);
  const [timeTue, setTimeTue] = useState(null);
  const [timeWed, setTimeWed] = useState(null);
  const [timeThur, setTimeThur] = useState(null);
  const [timeFri, setTimeFri] = useState(null);
  const [timeSat, setTimeSat] = useState(null);
  const [timeSun, setTimeSun] = useState(null);
  // Define onFinish function for form submission
  const onFinish = async (values) => {
    try {
      // dispatch(showLoading()); // Assuming showLoading and hideLoading are action creators

      if (image != null) {
        const reader = new FileReader();

        reader.readAsDataURL(image); // Read the file as a data URL

        //  console.log(reader)
        let imageD;

        const read = new FileReader();
        read.readAsDataURL(image);

        read.onload = async (event) => {
          // const imageData1 = reader.result.split(",")[1];
          // console.log("original",imageData1)

          const img = new Image();
          img.src = event.target.result;

          img.onload = async () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Calculate the new dimensions while maintaining aspect ratio
            let width = 850;
            let height = (img.height / img.width) * width;
            if (height > 350) {
              height = 650;
              width = (img.width / img.height) * height;
            }

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw image on canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Convert canvas to base64 string with compression
            const imageData = canvas.toDataURL("image/jpeg", 0.8); // Quality set to 90%

            imageD = imageData.split(",")[1];

            if (timeMon != null) {
              values.mondayTime = timeMon;
            }
            if (timeTue != null) {
              values.tuesdayTime = timeTue;
            }
            if (timeWed != null) {
              values.wednesdayTime = timeWed;
            }
            if (timeThur != null) {
              values.thursdayTime = timeThur;
            }

            if (timeFri != null) {
              values.fridayTime = timeFri;
            }
            if (timeSat != null) {
              values.saturdayTime = timeSat;
            }
            if (timeSun != null) {
              values.sundayTime = timeSun;
            }

            try {
              const res = await axios.post(
                "https://wisdomkart-server.onrender.com/api/v1/mentor/updateProfile",
                {
                  ...values,
                  userId: user._id,
                  image: imageD,
                },
                {
                  headers: {
                    Authorization: `Bearer ${cookies.token}`,
                  },
                }
              );

              // dispatch(hideLoading());

              if (res.data.success) {
                message.success("Profile Updated Successfully");
                navigate("/");
              } else {
                message.error("Couldnt Update Profile");
              }
            } catch (error) {
              message.error(error.message)
            }
          };
        };
      } else {


        try {
          if (timeMon != null) {
            values.mondayTime = timeMon;
          }
          if (timeTue != null) {
            values.tuesdayTime = timeTue;
          }
          if (timeWed != null) {
            values.wednesdayTime = timeWed;
          }
          if (timeThur != null) {
            values.thursdayTime = timeThur;
          }

          if (timeFri != null) {
            values.fridayTime = timeFri;
          }
          if (timeSat != null) {
            values.saturdayTime = timeSat;
          }
          if (timeSun != null) {
            values.sundayTime = timeSun;
          }

          const res = await axios.post(
            "https://wisdomkart-server.onrender.com/api/v1/mentor/updateProfile",
            {
              ...values,
              userId: user._id,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );

          // dispatch(hideLoading());

          if (res.data.success) {
            message.success("Profile Updated Successfully");
            navigate("/");
          } else {
            message.error("Couldnt Update Profile");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      // dispatch(hideLoading());
     
      message.error("Something went wrong");
      message.error(error.message);
    }
  };

  // Define arrays for areas and industries
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

  const dispatch = useDispatch();
  // Define function to fetch mentor info
  const getMentorInfo = async () => {
    try {
      // dispatch(showLoading())
      const res = await axios.post(
        "https://wisdomkart-server.onrender.com/api/v1/mentor/getMentorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      dispatch(hideLoading());

      setMentor(res.data.data);
      setLoading(false);

      setTimeMon(res.data.data.mondayTime);
    } catch (error) {
      dispatch(hideLoading());
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
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
          }}
        >
          <Spin spinning={loading} size="large"></Spin>
        </div>
      ) : (
        <>
          <h3 className={style.text}>Personal Details:</h3>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              ...mentor,
            }}
          >
            <Form.Item
              label="Profile Image"
              name="image"
              className={style.item}
            >
              <img
                src={`data:image/jpeg;base64,${mentor.image}`}
                alt="Profile"
                style={{
                  width: "20%",
                  height: "20%",
                  borderRadius: "5px",
                  margin: "auto",
                  marginBottom: "10px",
                }}
              />
              <Input type="file" name="image" onChange={handleImage} />
            </Form.Item>

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
              label="Experience (in years)"
              name="experience"
              rules={[{ required: true, message: "Experience is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Biodata"
              name="biodata"
              rules={[{ required: true, message: "Biodata is required" }]}
            >
              <Input />
            </Form.Item>


            <Form.Item
              label="Profile"
              name="displaydata"
              // rules={[{ required: true, message: "Experience is required" }]}
              placeholder="This is will displyed to mentees"
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

            <Form.Item label="Previous Monday Time">
              {mentor.mondayTime ? (
                <Input disabled value={formatTime(mentor.mondayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Monday Time" name="mondayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeMon(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>

            <Form.Item label="Previous Tuesday Time">
              {mentor.tuesdayTime ? (
                <Input disabled value={formatTime(mentor.tuesdayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Tuesday Time" name="tuesdayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeTue(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>

            <Form.Item label="Previous Wednesday Time">
              {mentor.wednesdayTime ? (
                <Input disabled value={formatTime(mentor.wednesdayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New wednesday Time" name="wednesdayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeWed(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>
            <Form.Item label="Previous Thursday Time">
              {mentor.thursdyTime ? (
                <Input disabled value={formatTime(mentor.thursdayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Thursday Time" name="thursdayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeThur(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>
            <Form.Item label="Previous Friday Time">
              {mentor.friday ? (
                <Input disabled value={formatTime(mentor.fridayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Friday Time" name="fridayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeFri(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>
            <Form.Item label="Previous Saturday Time">
              {mentor.saturdayTime ? (
                <Input disabled value={formatTime(mentor.saturdayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Saturday Time" name="saturdayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeSat(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
            </Form.Item>
            <Form.Item label="Previous Sunday Time">
              {mentor.sundayTime ? (
                <Input disabled value={formatTime(mentor.sundayTime)} />
              ) : (
                "Not selected"
              )}
            </Form.Item>

            <Form.Item label="New Sunday Time" name="sundayTime">
              <TimePicker.RangePicker
                format={format}
                // value={moment(mentor.mondayTime, format)}
                onChange={(value, dateString) => {
                  setTimeSun(value);
                  console.log("value", value);
                  console.log("datestring", dateString);
                }}
                style={{ width: "100%" }}
                placeholder={["Start Time", "End Time"]}
                // Set the value to update the TimePicker's selected times
              />
              .
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
