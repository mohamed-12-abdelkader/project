import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-5">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
