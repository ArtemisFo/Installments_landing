import "@styles/globals.css";
import "@repo/ui/styles.css";
import "@repo/icon/styles.css";
import type { Metadata, Viewport } from "next";
import { IranSans_font } from "./fonts.ts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Provider from "@components/providers/Provider.tsx";
import NextTopLoader from "nextjs-toploader";
import MainLayout from "@components/layout/MainLayout.tsx";
import {
  SITE_IMAGE,
  SITE_LINK,
  APP_DEFAULT_TITLE,
  THEME_COLOR,
  MANIFEST_FILE_NEXT,
  APP_NAME,
  APP_DESCRIPTION,
} from "@constants/env.ts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_LINK),
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  manifest: MANIFEST_FILE_NEXT,
  icons: {
    apple: SITE_IMAGE,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: SITE_IMAGE,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: {
      url: SITE_IMAGE,
      alt: "Installments Logo",
    },
  },
  openGraph: {
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: SITE_LINK,
    siteName: APP_DEFAULT_TITLE,
    locale: "fa_IR",
    type: "website",
  },
  appleWebApp: {
    title: APP_DEFAULT_TITLE,
    statusBarStyle: "default",
    startupImage: [SITE_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        dir="rtl"
        className={`${IranSans_font.className} font-settings-ss04`}
      >
        <NextTopLoader showSpinner={false} />
        <NextIntlClientProvider messages={messages}>
          <MainLayout>
            <Provider>{children}</Provider>
          </MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
