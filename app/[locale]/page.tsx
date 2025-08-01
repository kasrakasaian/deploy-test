import ClientPage from "./client-page";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ClientPage locale={locale} />;
}
