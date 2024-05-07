import { Form, Input, Button, message, Spin } from "antd";
import axios from "axios";
import { useState } from "react";
const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const res = await axios.post(
      "https://wisdomkart-server.onrender.com/api/v1/user/forgotPassword",
      {
        email: values.email,
      }
    );

    // console.log("Submitted values:", values);
    setLoading(false);
    if (res.data.success) {
      message.success({
        content: "Link to reset your password has been sent to your email.",
        duration: 6, // Duration in seconds
        style: {
          fontSize: "18px", // Adjust the font size as needed
        },
      });
    } else {
      message.error({
        content: `${res.data.message}`,
        duration: 5, // Duration in seconds
        style: {
          fontSize: "18px", // Adjust the font size as needed
        },
      });
    }
  };

  return (
    <div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(36, 160, 237, 0.1)",
            padding: "100px 0",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              border: "2px solid black",
              padding: "40px",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Forgot Password
            </h2>
            <Form
              name="forgot_password"
              onFinish={onFinish}
              style={{ textAlign: "center" }}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  placeholder="Your Email Address"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", marginRight: "10px" }}
                >
                  Submit
                </Button>
                <Button
                  type="link"
                  href="/login"
                  style={{
                    width: "100%",
                    backgroundColor: "#24a0ed",
                    marginTop: "10px",
                    color: "white",
                  }}
                >
                  Back To Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
