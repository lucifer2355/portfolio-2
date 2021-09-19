import "../styles/globals.css";
import MobileDrawer from "../components/MobileDrawer";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileDrawer />
      <SideBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
