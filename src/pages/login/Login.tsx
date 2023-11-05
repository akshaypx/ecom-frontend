import { Card, Input } from "antd";
import "./Login.css";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import CustomButton from "../../components/button/CustomButton";

const Login = () => {
  
  return (
    <div className="w-full h-screen flex justify-center items-start">
      <Card className="w-96 m-2 rounded-none">
        <p>Email</p>
        <Input className="p-2 my-2 rounded-none" placeholder="Enter Email" />
        <p>Password</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="password"
          suffix={<EyeInvisibleOutlined />}
          placeholder="Enter Password"
        />
        <CustomButton
          className="w-full h-full p-2 mt-2"
          type="default"
          onClick={() => {}}
        >
          Login
        </CustomButton>
        <CustomButton
          type="default"
          onClick={() => {}}
          className="w-full h-full rounded-none bg-blue-600 p-2 mt-2"
        >
          Google
        </CustomButton>
        <p className="text-gray-600 text-center p-2">
          New here ?{" "}
          <a href="/register" className="underline">
            Register now
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Login;
