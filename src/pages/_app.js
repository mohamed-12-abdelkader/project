import Footer from "@/components/footer/Footer";

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Core styles for react-splide lib
import "@splidejs/react-splide/css/core";
import Navbar from "@/components/navbar/Navbar";
import { LoadingProvider } from "@/components/loading/LoadingContext";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-5">
      <Navbar />
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
      <Footer />
    </div>
  );
}
