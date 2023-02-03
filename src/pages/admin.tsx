import { type NextPage } from "next";
import { useRouter } from "next/router";
import { RiAdminLine } from "react-icons/ri";
import { api } from "../utils/api";

const Admin: NextPage = () => {
  const router = useRouter();
  const { mutate: logout, isError } = api.admin.logout.useMutation({
    onSuccess: () => {
      router.push("/login");
    },
  });

  return (
    <>
      <div className="flex items-center justify-between sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Everything Good Admin
          <RiAdminLine className="ml-1 inline h-12" />
        </h2>
        <button
          onClick={() => logout()}
          className=" my-3 rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
      <div></div>
    </>
  );
};

export default Admin;
