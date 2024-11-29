import ErrorPage from "./ErrorPage.tsx";
import { Children } from "@interfaces/general.ts";
import NotFoundImg from "public/statics/images/not-found.png";

const NotFound = (props: { children?: Children }) => {
  return (
    <ErrorPage
      imgSrc={NotFoundImg.src}
      imgAlt={"not found"}
      title={"متاسفانه صفحه مورد نظر شما یافت نشد!"}
      subTitle={"این صفحه به آدرس دیگری تغییر کرده یا حذف شده است!"}
      children={props.children}
      btnFn={() => window.history.back()}
    />
  );
};

export default NotFound;
