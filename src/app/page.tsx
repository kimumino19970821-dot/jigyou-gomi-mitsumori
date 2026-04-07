import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VoiceSection } from "@/components/VoiceSection";
import { FlowSection } from "@/components/FlowSection";
import { FormSection } from "@/components/FormSection";
import { CompanySection } from "@/components/CompanySection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex-1 bg-[#ffde35]">
      <HeroSection />
      <FeaturesSection />
      <VoiceSection />
      <FlowSection />
      <FormSection />
      <CompanySection />
      <FooterSection />
    </main>
  );
}
