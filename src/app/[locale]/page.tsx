import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { FinalCta } from "@/components/home/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedWork />
      <PackagesTeaser />
      <ProcessSection />
      <AboutSnippet />
      <FinalCta />
    </>
  );
}
