import Footer from "@/components/layout/Footer";
import SectionSponsor from "@/components/sponsors/SectionSponsor";
import SectionSponsorsHeader from "@/components/sponsors/SectionSponsorsHeader";

export default function SponsorsPage() {
  return (
    <main className="sponsors-page">
      <SectionSponsorsHeader />
      <SectionSponsor />
      <Footer />
    </main>
  );
}
