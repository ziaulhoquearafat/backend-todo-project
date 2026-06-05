import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
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
      console.log(res);
      if (res.data.success) {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed!",
        icon: "error",
        draggable: true,
      });
      console.log(error);
    }
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto p-15">
      <Input
        value={user.email}
        onChange={changeHandler}
        placeholder="Enter Email"
        name="email"
        type="email"
        required
      />
      <Input
        value={user.password}
        onChange={changeHandler}
        placeholder="Enter Password"
        type="password"
        name="password"
        required
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
