import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm font-medium text-muted">{t("eyebrow")}</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{t("subtitle")}</p>
    </section>
  );
}
