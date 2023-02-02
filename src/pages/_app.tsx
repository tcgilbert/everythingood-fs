import { type AppType } from "next/app";
import { EB_Garamond, Roboto_Mono } from "@next/font/google";

import { api } from "../utils/api";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${ebGaramond.variable} ${robotoMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
