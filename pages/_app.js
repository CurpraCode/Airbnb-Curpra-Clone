import 'tailwindcss/tailwind.css';
import "nprogress/nprogress.css";
import "../styles/global.css";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({showSpinner: false});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
