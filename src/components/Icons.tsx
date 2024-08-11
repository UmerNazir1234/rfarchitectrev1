import { icons as TypesIcons } from "@/lib/type";
import React from "react";
import IconCircle from "./Icons/IconCircle";
import IconConsulting from "./Icons/IconConsulting";
import IconEye from "./Icons/IconEye";
import IconGrapic from "./Icons/IconGrapic";
type props = {
  type: TypesIcons;
};
const Icons = ({ type }: props) => {
  switch (type) {
    case "Circle":
      return <IconCircle />;
    case "Consulting":
      return <IconConsulting />;
    case "Eye":
      return <IconEye />;
    case "Graphic":
      return <IconGrapic />;

    default:
      return <IconCircle />;
      break;
  }
};

export default Icons;
