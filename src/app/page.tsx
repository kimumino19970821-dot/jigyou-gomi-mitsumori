import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VoiceSection } from "@/components/VoiceSection";
import { FlowSection } from "@/components/FlowSection";
import { FormSection } from "@/components/FormSection";
import { CompanySection } from "@/components/CompanySection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex-1 w-full md:max-w-[720px] md:mx-auto md:my-8 md:shadow-2xl md:rounded-3xl overflow-hidden bg-white">
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
