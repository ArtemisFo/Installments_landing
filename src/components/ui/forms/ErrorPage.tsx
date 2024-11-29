import Logo from "public/statics/images/horizontal-with-background.png";
import ErrorBg from "public/statics/images/error-bg.png";
import Typography from "@components/ui/forms/Typography.tsx";
import Button from "@components/ui/forms/Button.tsx";
import { Children } from "@interfaces/general.ts";

interface Props {
  title?: string;
  subTitle?: string;
  btnFn?: () => void;
  children?: Children;
  imgSrc: string;
  imgAlt: string;
}

const ErrorPage = (props: Props) => {
  return (
    <div
      className={
        "relative flex grow flex-col items-center gap-10 bg-white py-5"
      }
    >
      <img
        src={ErrorBg.src}
        alt={""}
        className={"absolute inset-0 h-full w-full"}
      />
      <img
        src={Logo.src}
        alt={""}
        style={{
          width: 114,
          height: 167,
        }}
        className={"z-10"}
      />
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        style={{
          width: 350,
          height: 350,
        }}
        className={"z-10"}
      />
      {props.children || (
        <div className={"z-10 flex flex-col items-center gap-5"}>
          <Typography variant={"h1"} weight={"bold"} className={"text-center"}>
            {props.title}
          </Typography>
          <Typography
            variant={"h3"}
            weight={"medium"}
            className={"text-center text-ink-bs"}
          >
            {props.subTitle}
          </Typography>
          <Button
            onClick={props.btnFn}
            color={"secondary"}
            size={"xl"}
            className={"w-[150px]"}
          >
            بازگشت به صفحه قبلی
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
