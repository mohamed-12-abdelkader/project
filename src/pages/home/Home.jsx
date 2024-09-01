import Footer from "@/components/footer/Footer";
import AssociationMembers from "@/components/Home/AssociationMembers";
import Conference from "@/components/Home/Conference";
import Events from "@/components/Home/Events";
import HeroSection from "@/components/Home/HeroSection";
import MyGooals from "@/components/Home/MyGooals";
import News from "@/components/Home/News";
import PartnersSuccess from "@/components/Home/PartnersSuccess";
import SectionFour from "@/components/Home/SectionFour";
import Sectionthree from "@/components/Home/Sectionthree";
import SectionTwo from "@/components/Home/SectionTwo";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <SectionTwo />
      <Sectionthree />
      <SectionFour />
      <MyGooals />
      <AssociationMembers />
      <Conference />

      <Events />
      <News />
      <PartnersSuccess />
    </div>
  );
};

export default HomePage;
