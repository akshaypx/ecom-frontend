import { Card, Input } from "antd";
import "./Register.css";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import CustomButton from "../../components/button/CustomButton";

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-start">
      <Card className="w-96 m-2 rounded-none">
        <p>Name</p>
        <Input className="p-2 my-2 rounded-none" placeholder="John Doe" />
        <p>Email</p>
        <Input className="p-2 my-2 rounded-none" placeholder="abcd@xyz.com" />
        <p>Password</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="password"
          suffix={<EyeInvisibleOutlined />}
          placeholder="Enter Password"
        />
        <p>Confirm Password</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="password"
          suffix={<EyeInvisibleOutlined />}
          placeholder="Enter Password"
        />
        <p>Phone No.</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="number"
          placeholder="+91 xxxx xxx xxx"
        />
        <CustomButton
          className="w-full h-full p-2 mt-2"
          type="default"
          onClick={() => {}}
        >
          Register
        </CustomButton>
        <CustomButton
          type="default"
          onClick={() => {}}
          className="w-full h-full rounded-none bg-blue-600 p-2 mt-2"
        >
          Google
        </CustomButton>
        <p className="text-gray-600 text-center p-2">
          Already a user ?{" "}
          <a href="/login" className="underline">
            Login now
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Register;
