import React, { ReactNode } from "react";
import { GradientColors } from "../types";

type Props = GradientColors & { children: ReactNode };

const Gradient = (props: Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(101deg, ${props.color1} 0%, ${props.color2} 51.56%, ${props.color3} 100%)`,
        minHeight: 400,
      }}
      className="article-img"
    >
      <div className="article-img__description">{props.children}</div>
    </div>
  );
};

export default Gradient;
