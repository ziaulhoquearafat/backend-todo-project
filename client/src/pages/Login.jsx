import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        alert("Login Successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Input type="email" placeholder="Email" onChange={handleChange} />
      <Input type="password" placeholder="Password" onChange={handleChange} />
      <Button onClick={handleLogin}>Log In</Button>
    </div>
  );
};

export default Login;
