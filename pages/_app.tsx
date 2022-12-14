import "@fortawesome/fontawesome-free";
import "tailwindcss";
import "../styles/globals.css";
import type { AppProps } from "next/app";
// config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
