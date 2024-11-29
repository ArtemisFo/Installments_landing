import React, { memo } from "react";
import { useTranslations } from "next-intl";
import Footer from "@components/layout/Footer.tsx";
import Header from "@components/layout/Header.tsx";
import { Children } from "@interfaces/general.ts";

function MainLayout({ children }: { children: Children }) {
  const t = useTranslations("webSiteConstant");

  return (
    <div className="mx-auto max-w-screen-3xl">
      <Header />
      <div className="mt-[--header-height]">{children}</div>
      <Footer />
    </div>
  );
}

export default memo(MainLayout);
