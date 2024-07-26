import { ImageProps } from "../types/common";
export function Image({ url, props, height, width, alt }: ImageProps) {
  return (
    <img
      src={url}
      height={height}
      width={width}
      alt={alt}
      className={` ${props} `}
    />
  );
}
