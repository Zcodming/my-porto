import "@fortawesome/fontawesome-free";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
// config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
