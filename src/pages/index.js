import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import SectionTwo from "@/components/Home/SectionTwo";
import Sectionthree from "@/components/Home/Sectionthree";
import SectionFour from "@/components/Home/SectionFour";
import MyGooals from "@/components/Home/MyGooals";
import AssociationMembers from "@/components/Home/AssociationMembers";
import Conference from "@/components/Home/Conference";
import Events from "@/components/Home/Events";
import Card from "@/ui/card/ConferenceCard";
import News from "@/components/Home/News";
import PartnersSuccess from "@/components/Home/PartnersSuccess";
import Footer from "@/components/footer/Footer";
import HomePage from "./home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="  pt-4">
      <HomePage />
    </main>
  );
}
