import fs from "fs/promises";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const BlurImage = async ({
  src,
  alt,
  width,
  height,
  fill,
  className,
}: Props) => {
  const buffer = await fs.readFile(`./public/${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default BlurImage;
