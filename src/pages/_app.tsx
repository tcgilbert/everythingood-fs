import { type AppType } from "next/app";
import { EB_Garamond, Roboto_Mono, Inter } from "@next/font/google";

import { api } from "../utils/api";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${ebGaramond.variable} ${robotoMono.variable} ${inter.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
