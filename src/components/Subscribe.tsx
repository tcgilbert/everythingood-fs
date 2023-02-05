import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { type NextPage } from "next";
import { EB_Garamond, Roboto_Mono } from "@next/font/google";
import { api } from "../utils/api";
import { Transition } from "@headlessui/react";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface SubscribeProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Subscribe = ({ setOpen, setShow }: SubscribeProps) => {
  const [email, setEmail] = useState("");
  const { mutateAsync: createSubscriber } = api.subscribe.create.useMutation();

  return (
    <>
      <h2 className={`${ebGaramond.className} text-center text-3xl font-bold`}>
        Subscribe to our Newsletter
      </h2>
      <p
        className={`${robotoMono.className} mt-3 max-w-3xl text-center text-lg leading-6 text-gray-600`}
      >
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
      <div className="py-3" />
      <form className="">
        <div className="flex flex-col">
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border bg-gray-100 px-5 py-3 placeholder-gray-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="py-1" />
        <button
          type="submit"
          className="w-full rounded-md border bg-gray-300 px-3 py-3 text-center font-medium text-gray-900 hover:bg-gray-200"
          onClick={async (e) => {
            e.preventDefault();
            await createSubscriber({ email });
            setShow(true);
            setOpen(false);
          }}
        >
          Subscribe
        </button>
      </form>
    </>
  );
};
