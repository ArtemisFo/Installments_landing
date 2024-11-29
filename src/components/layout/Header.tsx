"use client";

import React, { memo, useMemo } from "react";
import { useTranslations } from "next-intl";
import HorizontalLogo from "@components/ui/forms/HorizontalLogo.tsx";
import Button from "@components/ui/forms/Button.tsx";
import Typography from "@components/ui/forms/Typography.tsx";
import UserIcon from "@components/ui/icons/UserIcon.tsx";
import { usePathname } from "next/navigation";
import NextLink from "@components/ui/gadgets/NextLink.tsx";
import {
  PAGE_ROUTE_ABOUT_US,
  PAGE_ROUTE_CONTACT_US,
  PAGE_ROUTE_COOPERATION,
  PAGE_ROUTE_HOME,
  PAGE_ROUTE_SHOPS,
} from "@constants/env.ts";

function Header() {
  const t = useTranslations("webSiteConstant");
  const pathname = usePathname();

  const list = useMemo(() => {
    return [
      { name: t("buttons.mainPage"), link: PAGE_ROUTE_HOME },
      { name: t("buttons.shops"), link: PAGE_ROUTE_SHOPS },
      { name: t("buttons.cooperationRequest"), link: PAGE_ROUTE_COOPERATION },
      { name: t("buttons.aboutUs"), link: PAGE_ROUTE_ABOUT_US },
      { name: t("buttons.contactUs"), link: PAGE_ROUTE_CONTACT_US },
    ] as const;
  }, []);

  return (
    <header className="fixed right-1/2 top-0 z-10 max-w-screen-3xl w-full translate-x-1/2">
      <div className="bg-surface-6 px-15 flex items-center justify-between shadow header-rounded relative header-line">
        <NextLink href={PAGE_ROUTE_HOME}>
          <HorizontalLogo size="sm" />
        </NextLink>
        <div className="flex">
          {list.map((val, index) => (
            <div
              key={index}
              className={`py-6 mx-5 relative${pathname === val.link ? " activeNavLink" : ""}`}
            >
              <NextLink href={val.link}>
                <Typography
                  variant="b1"
                  weight="regular"
                  className="text-ink-bs"
                >
                  {val.name}
                </Typography>
              </NextLink>
            </div>
          ))}
        </div>
        <div>
          <Button size="sm" variant="halogen" startIcon={<UserIcon />}>
            {t("buttons.userAccount")}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
