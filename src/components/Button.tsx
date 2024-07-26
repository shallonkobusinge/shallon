import { Link } from "react-router-dom";
import { ButtonState } from "../enums/common";
import { ButtonProps } from "../types/common";
import Resume from "/files/ShallonKobusingeResume.pdf";

export function Button({
  label,
  background,
  borderColor,
  props,
  buttonState,
  textProps,
}: ButtonProps) {
  const linkedIn = "https://www.linkedin.com/in/shallon-kobusinge-701453186/";
  return (
    <>
      <Link
        to={buttonState == ButtonState.Resume ? Resume : linkedIn}
        target={"_blank"}
      >
        <button
          className={`bg-${background} text-center cursor-pointer uppercase text-md font-medium ${
            borderColor != "none"
              ? " border-primary border-solid"
              : ""
          } ${props}`}
        >
          <p className={`${textProps}`}>{label}</p>
        </button>
      </Link>

      {/* <ToastContainer /> */}
    </>
  );
}
