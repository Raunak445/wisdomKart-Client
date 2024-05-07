import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { userId } = useParams();

  const onFinish = async (values) => {
    // console.log("Submitted values:", values);

    const res = await axios.post(
      'https://wisdomkart-server.onrender.com/api/v1/user/resetPassword',
      {
        password: values.newPassword,
        userId: userId,
      }
    );

    if (res.data.success) {
      message.success({
        content: "Password changed successfully.",
        duration: 6, // Duration in seconds
            style: {
          fontSize: "18px", // Adjust the font size as needed
        },
      });
    } else {
      message.error({
        content: `${res.data.message}`,
        duration: 6, // Duration in seconds
        style: {
          fontSize: "18px", // Adjust the font size as needed
        },
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        marginTop: "100px",
        border: "2px solid black",
        padding: "40px",
        borderRadius: "20px",
        backgroundColor: "#f0f6ff", // Light blue background color
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Reset Password
      </h2>
      <Form
        name="reset_password"
        onFinish={onFinish}
        style={{ textAlign: "center" }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please enter your new password" },
            {
              min: 6,
              message: "Password must be at least 6 characters long",
            },
          ]}
        >
          <Input.Password
            placeholder="New Password"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", marginRight: "10px" }}
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
