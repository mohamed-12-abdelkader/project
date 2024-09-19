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
import Loading from "@/components/loading/Loading";
import { useLoading } from "@/components/loading/LoadingContext";
import useGitData from "@/server/useGitData";

import React from "react";

const HomePage = () => {
  const { loading } = useLoading();

  return (
    <div>
      {loading && <Loading />}
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
