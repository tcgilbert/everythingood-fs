import { type Dispatch, type SetStateAction, useState } from "react";

import { EB_Garamond, Roboto_Mono } from "@next/font/google";
import { api } from "../utils/api";
import { LoaderButton } from "./LoaderButton";
const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface SubscribeProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setShowNotification: Dispatch<SetStateAction<boolean>>;
}

export const Subscribe = ({ setOpen, setShowNotification }: SubscribeProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const { mutateAsync: createSubscriber } = api.subscribe.create.useMutation();

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setError(true);
      setSubscribeLoading(false);
      return;
    }
    try {
      const subscriber = await createSubscriber({ email });
      setShowNotification(true);
      setOpen(false);
      setTimeout(() => {
        setShowNotification(false);
        setSubscribeLoading(false);
      }, 4000);
      return subscriber;
    } catch (error) {
      console.error(error);
      setSubscribeLoading(false);
    }
  };

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
      <LoaderButton
        handleOnClick={handleSubscribe}
        className="text-md flex w-full items-center justify-center rounded-md border border-blue-100 bg-blue-100 px-3 py-3 text-center font-medium text-blue-700 transition duration-150 ease-in-out hover:border-blue-700"
        loading={subscribeLoading}
        setLoading={setSubscribeLoading}
      >
        Subscribe
      </LoaderButton>
      <button
        className="text-md flex w-full items-center justify-center rounded-md border border-blue-100 bg-blue-100 px-3 py-3 text-center font-medium text-blue-700 transition duration-150 ease-in-out hover:border-blue-700"
        onClick={() => {
          void handleSubscribe();
        }}
      >
        Subscribe
      </button>
      {error && (
        <span className="italic text-red-600">
          Please enter a valid email address
        </span>
      )}
    </>
  );
};
