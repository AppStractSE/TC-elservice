import CenteredSection from "@/components/sections/CenteredSection";
import CenterSection from "@/components/sections/CenterSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import SplideWithArrows from "@/components/splide/SplideWithArrows";
import { content } from "@/data/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våra tjänster",
  openGraph: {
    title: "TC Elservice | Våra tjänster",
    description: "Våra tjänster",
    url: "/vara-tjanster",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Våra tjänster",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice - Våra tjänster",
      },
    ],
    description: "Våra tjänster",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Våra tjänster"
        text="Elektriker i Lindesberg"
      />
      <CenteredSection className="overflow-hidden border-b">
        <h2 className="text-center font-medium tracking-wide text-3xl md:text-4xl lg:text-5xl">
          Allt för ström & ljus
        </h2>
        <p className="whitespace-pre-line text-balance text-center text-base md:text-lg">
          Smarta och säkra el-lösningar anpassade för alla behov – från hem och
          företag till industri och offentliga miljöer. Med vår expertis får du
          trygg och effektiv elservice, oavsett projektets storlek.
        </p>
        <SplideWithArrows />
      </CenteredSection>
      {content.services.map((service, index) => (
        <TwoPaneSection
          rtl={index % 2 === 0}
          key={index}
          button={{
            href: "/vara-tjanster/" + service.id,
            text: "Läs mer",
          }}
          className="border-b"
          image={service.image}
          title={service.title}
          text={service.description}
        />
      ))}
      <CenterSection
        button={{
          href: "/rotavdrag",
          text: "Räkna ut ROT-avdrag",
        }}
        className="border-b"
        title="Hur räknar jag ut ROT-avdrag?"
        text={`Planera och utnyttja rotavdraget för att minska kostnaderna för dina elinstallationer vid renovering eller nybyggnation. Våra lösningar säkerställer ett effektivt utförande, där du enkelt kan dra nytta av skatteavdraget för ett ekonomiskt resultat.`}
      />
    </>
  );
}
