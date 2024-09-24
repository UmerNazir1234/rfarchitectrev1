import ImageWithText from "@/components/ImageWithText";
import { manageSales } from "@/data/blueticks";
import React from "react";

const ManageSales = () => {
  return (
    <div>
      <ImageWithText fullWidth={true} content={manageSales} classes="!pb-0" />
    </div>
  );
};

export default ManageSales;
