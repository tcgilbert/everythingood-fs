import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { api } from "../utils/api";
import { AdminNav } from "../components/admin/AdminNav";
import { AdminContent } from "../components/admin/AdminContent";
import Link from "next/link";
import { CreateEntry } from "../components/admin/CreateEntry";

const Admin: NextPage = () => {
  const [guide, setGuide] = useState("les");
  const [displayed, setDisplayed] = useState("restaurants");
  const router = useRouter();

  // gets data
  const { data, isLoading, refetch } = api.guide.getAll.useQuery({ guide });
  // logs out
  const { mutate: logout } = api.admin.logout.useMutation({
    onSuccess: () => {
      router.push("/login");
    },
  });

  return (
    <>
      <div className="bg-white py-2" />
      <div className="flex items-center justify-between bg-white px-3">
        <h2 className="text-3xl font-bold tracking-tight">
          Everything Good Admin
          <RiAdminLine className="ml-1 inline h-12" />
        </h2>
        <div className="flex justify-between">
          <CreateEntry
            refetch={refetch}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
          <Link
            className="relative inline-flex items-center border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-400 hover:text-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            href="/"
          >
            Home
          </Link>
          <button
            onClick={() => logout()}
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-400 hover:text-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-white py-2" />
      <AdminNav
        guide={guide}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setGuide={setGuide}
      />

      <div className="py-1" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdminContent data={data!} displayed={displayed} refetch={refetch} />
      )}
    </>
  );
};

export default Admin;
