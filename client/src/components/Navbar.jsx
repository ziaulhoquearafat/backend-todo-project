import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/logout");
      if (res.data.success) {
        Swal.fire({
          title: "Logged Out Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 bg-gray-500 text-white">
        <h1>My Todo App</h1>
        <Button onClick={handleLogout} className="cursor-pointer">
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Navbar;
