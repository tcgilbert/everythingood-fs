import { type NextPage } from "next";
import { ChangeEvent, useState } from "react";

const Login: NextPage = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div
        className="flex flex-col bg-gray-600
      p-9"
      >
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          value={input.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="text"
          value={input.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-7 border-2 border-red-100 bg-green-400"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
