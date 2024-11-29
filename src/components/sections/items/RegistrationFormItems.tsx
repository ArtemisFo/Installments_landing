"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import MinimalTabs from "@components/ui/forms/MinimalTabs.tsx";
import Button from "@components/ui/forms/Button.tsx";
import TextField from "@components/ui/forms/TextField.tsx";
import NextImage from "@components/ui/gadgets/NextImage.tsx";
import * as Yup from "yup";
import ArrowLeftIcon from "@components/ui/icons/ArrowLeftIcon.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BAG_TICK_TINY_NEXT_IMAGE,
  BAG_TINY_NEXT_IMAGE,
} from "@constants/env.ts";

enum Tabs {
  New,
  Mine,
}

type Inputs = {
  store: string;
};

function RegistrationFormItems() {
  const t = useTranslations("webSiteConstant");

  const [tabState, setTabState] = useState(Tabs.New);

  const schema = useMemo(
    () =>
      Yup.object({
        store: Yup.string().required(t("errors.required")),
      }),
    [],
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    // @ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      store: "",
    },
  });

  const onSubmit = (data: Inputs) => {};

  return (
    <div className="w-full">
      <MinimalTabs
        tabs={[
          {
            label: t("buttons.storeRegistration"),
            icon: (
              <NextImage
                width={20}
                height={20}
                src={BAG_TICK_TINY_NEXT_IMAGE}
                alt="registration form first"
              />
            ),
            index: Tabs.New,
          },
          {
            label: t("buttons.organizationRegistration"),
            icon: (
              <NextImage
                width={20}
                height={20}
                src={BAG_TINY_NEXT_IMAGE}
                alt="registration form second"
              />
            ),
            index: Tabs.Mine,
          },
        ]}
        color="primary"
        value={tabState}
        onChangeTab={(_, tab) => setTabState(tab.index)}
        tabClasses="flex-1"
        tabActiveClasses="bg-primary-onMain text-primary-main"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pt-10">
            {tabState === Tabs.New ? (
              <div className="flex flex-wrap gap-6">
                <div className="flex w-full">
                  <TextField
                    requiredLabel
                    label={t("inputs.storeName")}
                    helperText={errors.store?.message}
                    helperTextProps={{ className: "!text-error-main" }}
                    {...register("store")}
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.phoneNumber")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.fieldWork")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.province")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.city")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <TextField
                    requiredLabel
                    label={t("inputs.fullAddress")}
                    helperText={errors.store?.message}
                    helperTextProps={{ className: "!text-error-main" }}
                    {...register("store")}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-6">
                <div className="flex w-full">
                  <TextField
                    requiredLabel
                    label={t("inputs.orgName")}
                    helperText={errors.store?.message}
                    helperTextProps={{ className: "!text-error-main" }}
                    {...register("store")}
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.phoneNumber")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.numberEmployees")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.province")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                  <div className="flex flex-1">
                    <TextField
                      requiredLabel
                      label={t("inputs.city")}
                      helperText={errors.store?.message}
                      helperTextProps={{ className: "!text-error-main" }}
                      {...register("store")}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <TextField
                    requiredLabel
                    label={t("inputs.fullAddress")}
                    helperText={errors.store?.message}
                    helperTextProps={{ className: "!text-error-main" }}
                    {...register("store")}
                  />
                </div>
              </div>
            )}
            <div className="mt-10">
              <Button
                type="submit"
                size="lg"
                fullWidth
                endIcon={<ArrowLeftIcon />}
              >
                {t("buttons.registerRequest")}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationFormItems;
