import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/todo",
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        Swal.fire({
          title: "Todo Added Successfully!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add A New Todo"
            type="text"
            className="w-1/3"
          />
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-1/3"
            placeholder="Enter todo details"
          />
          <Button onClick={handleAddTodo} className="cursor-pointer">
            Add Todo
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
