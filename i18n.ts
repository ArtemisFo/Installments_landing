import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "fa";

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
}) as any;
