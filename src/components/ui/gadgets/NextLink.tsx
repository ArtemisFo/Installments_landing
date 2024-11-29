import Link, { LinkProps } from "next/link";
import { Children } from "@interfaces/general";

interface Props extends LinkProps {
  target?: string;
  children?: Children | string;
}

const NextLink = (props: Props) => {
  const { href, target, ...prop } = props;

  return (
    <Link href={href} target={target} {...prop}>
      {props.children}
    </Link>
  );
};

export default NextLink;
