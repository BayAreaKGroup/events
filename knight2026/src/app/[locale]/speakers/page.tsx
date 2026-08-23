import Footer from "@/components/layout/Footer";
import SectionAgendaCTA from "@/components/agenda/SectionAgendaCTA";
import SectionSpeakerList from "@/components/speakers/SectionSpeakerList";
import SectionSpeakersHeader from "@/components/speakers/SectionSpeakersHeader";

export default function SpeakersPage() {
  return (
    <main className="speakers-page">
      <SectionSpeakersHeader />
      <SectionSpeakerList />
      <SectionAgendaCTA />
      <Footer />
    </main>
  );
}
