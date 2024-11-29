"use client";

import React from "react";
import ServerError from "@components/ui/forms/ServerError.tsx";
import Button from "@components/ui/forms/Button.tsx";
import Typography from "@components/ui/forms/Typography.tsx";
import { useTranslations } from "next-intl";
import Header from "@components/layout/Header.tsx";
import Footer from "@components/layout/Footer.tsx";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const t = useTranslations("webSiteConstant");

  return (
    <div className="bg-screen relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="my-15 flex min-h-[78vh] items-stretch pb-5 pt-4">
        <div className="mx-2 flex grow items-stretch overflow-hidden rounded-xl">
          <ServerError>
            <div className={"z-10 flex flex-col items-center gap-5"}>
              <Typography
                variant={"h1"}
                weight={"bold"}
                className={"text-center"}
              >
                {t("sentences.serverError")}
              </Typography>
              <Typography
                variant={"h3"}
                weight={"medium"}
                className={"text-center text-ink-bs"}
              >
                {error.message}
              </Typography>
              <Button
                onClick={reset}
                color={"secondary"}
                size={"xl"}
                className={"w-[150px]"}
              >
                {t("buttons.tryAgain")}
              </Button>
            </div>
          </ServerError>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
