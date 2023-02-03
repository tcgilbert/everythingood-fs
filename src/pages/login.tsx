import { type NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { api } from "../utils/api";
import { ErrorPrompt } from "../components/ErrorPrompt";
import { RiAdminLine } from "react-icons/ri";

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

  const handleSubmit = () => {
    if (input.username === "" || input.password === "") {
      return;
    }
    mutate(input);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {isError && <ErrorPrompt />}
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              <RiAdminLine className="mx-auto h-12 w-auto" />
              Everything Good Admin
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                  value={input.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={() => handleSubmit()}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
      </div> */}
    </>
  );
};

export default Login;
