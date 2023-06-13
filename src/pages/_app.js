import { Public_Sans } from "next/font/google";
const publicSans = Public_Sans({ subsets: ["latin"] });
import "@accordion/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={publicSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
