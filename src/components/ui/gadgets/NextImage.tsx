import Image, { ImageProps } from "next/image";

const NextImage = (props: ImageProps) => {
  const { src, width = 100, height = 100, ...prop } = props;
  return <Image src={src} width={width} height={height} {...prop} />;
};

export default NextImage;
