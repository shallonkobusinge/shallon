import { ReactElement } from "react";
import { ButtonState } from "../enums/common";

export interface ButtonProps {
  label: string;
  borderColor: string;
  background: string;
  props?: string;
  // action?: React.MouseEvent<HTMLButtonElement>;
  textProps?: string;
  readonly buttonState?: ButtonState;
  // readonly onClick: () => void;
}
export type ImageProps = {
  width?: string;
  height?: string;
  url: string;
  alt: string;
  props?: string;
};

export type IconProps = {
  icon: ReactElement;
  title?: string;
  url: string;
};

export type CardProps = {
  imageUrl: ImageProps;
  description: string;
  title: string;
  siteLink: string;
};

export interface ProjectProps extends CardProps {
  id: number;
}

export interface HeaderProps {
  title: string;
  optionalTitle?: string;
  color?: string;
  props?: string;
}
