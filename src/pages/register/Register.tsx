import { Card, Input } from "antd";
import "./Register.css";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import CustomButton from "../../components/button/CustomButton";
import { useEffect, useState } from "react";
import axios from "axios";

interface ValidationError {
  errors: {
    [fieldName: string]: {
      name: string;
      message: string;
      properties: {
        message: string;
        type: string;
        path: string;
        value: string;
      };
      kind: string;
      path: string;
      value: string;
    };
  };
  _message: string;
  name: string;
  message: string;
}

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: 0,
  });
  const [errors, setErrors] = useState<ValidationError>({
    errors: {},
    _message: "",
    name: "",
    message: "",
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    console.log("register clicked");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if (data.errors) {
        setErrors(data as ValidationError);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios Error:", err.message);
        console.error("Response Data:", err.response?.data);
        console.error("Response Status:", err.response?.status);
      } else {
        console.log(errors);
      }
    }
  };

  console.log(errors);

  return (
    <div className="w-full h-screen flex justify-center items-start">
      <Card className="w-96 m-2 rounded-none">
        <p>Name</p>
        <Input
          className="p-2 my-2 rounded-none"
          placeholder="John Doe"
          name="name"
          onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
        />
        <p>Email</p>
        <Input
          className="p-2 my-2 rounded-none"
          placeholder="abcd@xyz.com"
          name="email"
          onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
        />
        {errors?.errors?.email?.message && (
          <p className="text-red-600 pb-2">{errors.errors.email.message}</p>
        )}
        <p>Password</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="password"
          suffix={<EyeInvisibleOutlined />}
          placeholder="Enter Password"
          name="password"
          onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
        />
        {errors?.errors?.password?.message && (
          <p className="text-red-600 pb-2">{errors.errors.password.message}</p>
        )}
        <p>Confirm Password</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="password"
          suffix={<EyeInvisibleOutlined />}
          placeholder="Enter Password"
          name="confirmPassword"
          onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
        />
        <p>Phone No.</p>
        <Input
          className="p-2 my-2 rounded-none"
          type="number"
          placeholder="+91 xxxx xxx xxx"
          name="phoneNumber"
          onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
        />
        <CustomButton
          className="w-full h-full p-2 mt-2"
          type="default"
          onClick={(e) => {
            handleSubmit(e);
          }}
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
