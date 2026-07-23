import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const links = [
    { href: "/work", label: t("nav.work") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <footer className="border-t border-border/80 bg-surface/40 py-12">
      <Container className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-block font-semibold tracking-[0.14em] text-text">
            FLOWSTATE
            <span className="ml-1 text-accent" aria-hidden>
              ●
            </span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {t("footer.blurb")}
          </p>
          <a
            href="mailto:hello@flowstate-design.co"
            className="inline-block text-sm text-accent transition-colors hover:text-accent-hover"
          >
            hello@flowstate-design.co
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 sm:items-end">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="mt-10 border-t border-border/60 pt-6">
        <p className="text-xs text-muted">
          © {year} Flowstate Design. {t("footer.rights")}
        </p>
      </Container>
    </footer>
  );
}
