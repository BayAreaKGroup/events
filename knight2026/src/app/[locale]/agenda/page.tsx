import Footer from "@/components/layout/Footer";
import VideoSection from "@/components/common/VideoSection";
import SectionAgendaGroups from "@/components/agenda/SectionAgendaGroups";
import SectionAgendaAfterParty from "@/components/agenda/SectionAgendaAfterParty";
import SectionAgendaHeader from "@/components/agenda/SectionAgendaHeader";
import SectionAgendaSchedule from "@/components/agenda/SectionAgendaSchedule";

export default function AgendaPage() {
  return (
    <main className="agenda-page">
      <SectionAgendaHeader />
      <SectionAgendaSchedule />
      <SectionAgendaGroups />
      <SectionAgendaAfterParty />
      <VideoSection
        videoSrc="/events/knight2026/videos/knight2025-review.mp4"
        showBackground={false}
      />
      <Footer />
    </main>
  );
}
