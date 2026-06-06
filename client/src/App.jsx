import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Card, CardDescription, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/todo");
        // console.log(res);
        if (res.data.success) {
          setTodos(res.data.todos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

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
      setTodos([...todos, res.data.todo]);
      setTitle("");
      setDescription("");
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
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add A New Todo"
            type="text"
            className="w-1/3"
          />
          <Textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-1/3"
            placeholder="Enter todo details"
          />
          <Button onClick={handleAddTodo} className="cursor-pointer">
            Add Todo
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 max-w-7xl mx-auto">
          {todos.map((todo) => (
            <Card key={todo?._id} className="p-4">
              <CardTitle>{todo?.title}</CardTitle>
              <CardDescription>{todo?.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
