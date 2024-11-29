"use client";

import React from "react";
import NotFound from "@components/ui/forms/NotFound.tsx";
import Header from "@components/layout/Header.tsx";
import Footer from "@components/layout/Footer.tsx";

const NotFoundPage = () => {
  return (
    <div className="bg-screen relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="my-15 flex min-h-[78vh] items-stretch pb-5 pt-4">
        <div className="mx-2 flex grow items-stretch overflow-hidden rounded-xl">
          <NotFound />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
