import Footer from "@/components/layout/Footer";
import VideoSection from "@/components/common/VideoSection";
import SectionAgendaGroups from "@/components/agenda/SectionAgendaGroups";
import SectionAgendaHeader from "@/components/agenda/SectionAgendaHeader";
import SectionAgendaSchedule from "@/components/agenda/SectionAgendaSchedule";

export default function AgendaPage() {
  return (
    <main className="agenda-page">
      <SectionAgendaHeader />
      <SectionAgendaSchedule />
      <SectionAgendaGroups />
      <VideoSection videoSrc="/events/knight2026/videos/knight2025-review.mp4" />
      <Footer />
    </main>
  );
}
