import ClientPage from "./client-page";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <ClientPage locale={locale} />;
}
