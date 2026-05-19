import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import GlossarySection from "@/components/GlossarySection";
import HomePortalSections from "@/components/HomePortalSections";
import ChannelsSection from "@/components/ChannelsSection";
import ToolsSection from "@/components/ToolsSection";


function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePortalSections />
      <ChannelsSection />
      <ToolsSection />
      
      <GlossarySection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default Index;
