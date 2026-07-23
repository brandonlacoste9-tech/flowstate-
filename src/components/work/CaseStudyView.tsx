import { getTranslations } from "next-intl/server";
import type { CaseStudy, Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/navigation";

export async function CaseStudyView({
  study,
  locale,
}: {
  study: CaseStudy;
  locale: Locale;
}) {
  const t = await getTranslations("work");

  const sections = [
    { key: "challenge" as const, body: study.challenge[locale] },
    { key: "approach" as const, body: study.approach[locale] },
    { key: "outcome" as const, body: study.outcome[locale] },
  ];

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <Link
              href="/work"
              className="transition-colors hover:text-accent"
            >
              {t("title")}
            </Link>
            <span className="mx-2 text-border" aria-hidden>
              /
            </span>
            <span className="text-accent">{study.year}</span>
          </p>

          <div className="flex flex-wrap gap-1.5">
            {study.niche.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/80 bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {study.title[locale]}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {study.summary[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            className="relative mt-12 overflow-hidden rounded-[var(--radius)] border border-border"
            style={{
              background: `linear-gradient(135deg, ${study.accent}33 0%, transparent 50%), linear-gradient(160deg, #132033 0%, #0b1220 100%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `radial-gradient(circle at 18% 25%, ${study.accent}66, transparent 42%), radial-gradient(circle at 82% 70%, ${study.accent}40, transparent 38%)`,
              }}
              aria-hidden
            />

            <div className="relative flex min-h-[220px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-10">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  flowstate.design
                </span>
              </div>

              <div className="mt-16 flex items-end justify-between gap-4 sm:mt-24">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Project
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                    {study.title[locale].split("—")[0].trim()}
                  </p>
                </div>
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: study.accent }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {sections.map((section, i) => (
            <FadeIn key={section.key} delay={0.1 + i * 0.06}>
              <section className="h-full rounded-[var(--radius)] border border-border/80 bg-surface/40 p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {t(section.key)}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {section.body}
                </p>
              </section>
            </FadeIn>
          ))}
        </div>
      </Container>
    </article>
  );
}
