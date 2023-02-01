import { type NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { api } from "../utils/api";

const Login: NextPage = () => {
  const router = useRouter();
  const { mutate, isError } = api.admin.login.useMutation({
    onSuccess: () => {
      router.push("/admin");
    },
  });

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
        {isError && <p className="text4xl text-red-600">Invalid credentials</p>}
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
          type="password"
          value={input.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-7 border-2 border-red-100 bg-green-400"
          onClick={() => mutate(input)}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
