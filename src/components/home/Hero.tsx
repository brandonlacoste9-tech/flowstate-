import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="flow-orb pointer-events-none absolute -left-1/4 top-[-20%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl sm:h-[640px] sm:w-[640px]"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,192,0.35) 0%, rgba(125,211,192,0.08) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-[-30%] h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(27,58,75,0.7) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <FadeIn>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {t("eyebrow")}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {t("title")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {t("subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/contact">{t("ctaPrimary")}</Button>
            <Button href="/work" variant="secondary">
              {t("ctaSecondary")}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
