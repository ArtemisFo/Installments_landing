"use client";

import React from "react";
import { SnackbarProvider } from "notistack";
import { Children } from "@interfaces/general.ts";
import { SnackbarUtilsConfigurator } from "@utils/SnackbarUtils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Provider({ children }: { children: Children }) {
  return (
    <SnackbarProvider>
      {children}
      <SnackbarUtilsConfigurator />
    </SnackbarProvider>
  );
}

export default Provider;
