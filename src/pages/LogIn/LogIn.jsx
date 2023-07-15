import { Button, Checkbox, Form, Input, message as mes } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { axiosRequest, saveToken } from "../../utils/axiosRequest";
import { Link } from "react-router-dom";
import logo from '../../assets/online.svg'

const LogIn = () => {
  const Nav=useNavigate()
  const onFinish = async (event) => {
    try {
      const { data } = await axiosRequest.post("Auth/Login", {
        userName: event["username"],
        password: event["password"],
      });
      if(data.code===200){
      mes.success(data.message)
      sessionStorage.setItem("isLogged", JSON.stringify(true));
      saveToken(data.data.token);
      Nav("/dashboard");
      }else{
        mes.error(data.message)
      }
      
    } catch (error) {}
  };
  return (
    <div className="bg-[#F5F7FA] h-screen">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center ">
        <div className="bg-white w-[420px] p-4 pt-3 rounded-lg">
        <img src={logo} alt=""  className='block mx-auto'/>
          <h1 className="text-[#111111] mb-4 text-3xl tracking-widest text-center font-medium">Login</h1>
          <Form
            name="normal_login"
            className="max-w-lg"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="float-right text-[#42a5f5]" to="/">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#42a5f5]"
                
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
