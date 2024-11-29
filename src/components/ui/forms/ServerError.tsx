import ErrorPage from "./ErrorPage.tsx";
import ServerErrorImg from "public/statics/images/server-error.png";
import { Children } from "@interfaces/general.ts";

const ServerError = (props: { children?: Children }) => {
  return (
    <ErrorPage
      imgSrc={ServerErrorImg.src}
      imgAlt={"server error"}
      title={"در ارتباط با سرور با مشکلی پیش آمده!"}
      subTitle={"لطفا چند دقیقه دیگر مجددا تلاش کنید"}
      children={props.children}
      btnFn={() => window.history.back()}
    />
  );
};

export default ServerError;
