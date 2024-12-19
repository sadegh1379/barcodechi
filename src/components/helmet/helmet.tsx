import { FC } from "react";
import { default as BHelmet } from "react-helmet";
import { IHelmetProps } from "./types";


export const Helmet: FC<IHelmetProps> = ({
  title,
}) => {
  return (
      <BHelmet>
        <title>بارکدچی | {title}</title>
      </BHelmet>
  );
};
