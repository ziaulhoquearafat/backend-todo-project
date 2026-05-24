import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 bg-gray-500 text-white">
        <h1>My Todo App</h1>
        <Button className="cursor-pointer">Log Out</Button>
      </div>
    </>
  );
};

export default Navbar;
