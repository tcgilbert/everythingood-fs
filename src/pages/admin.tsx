import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { api } from "../utils/api";
import { AdminNav } from "../components/AdminNav";
import { Divider } from "../components/Divider";
import { AdminContent } from "../components/AdminContent";

const Admin: NextPage = () => {
  const [guide, setGuide] = useState("les");
  const [displayed, setDisplayed] = useState("restaurants");
  const { data, isLoading } = api.guide.getAll.useQuery({ guide });

  const router = useRouter();
  const { mutate: logout, isError } = api.admin.logout.useMutation({
    onSuccess: () => {
      router.push("/login");
    },
  });

  return (
    <>
      <div className="flex items-center justify-between px-3">
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
      <AdminNav
        guide={guide}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setGuide={setGuide}
      />
      <Divider />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdminContent data={data!} displayed={displayed} />
      )}
    </>
  );
};

export default Admin;
