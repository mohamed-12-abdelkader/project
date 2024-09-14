import Image from "next/image";
import { Inter, Tajawal } from "next/font/google";
import HeroSection from "@/components/Home/HeroSection";

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

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${tajawal.className} pt-4`}>
      <HomePage />
    </main>
  );
}
