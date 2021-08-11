import 'tailwindcss/tailwind.css';
import "nprogress/nprogress.css";
import "../styles/global.css";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({showSpinner: false});
Router.events.on("routeChangeStart", () => NProgres.start());
Router.events.on("routeChangeComplete", () => NProgres.done());
Router.events.on("routeChangeError", () => NProgres.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
