import React from "react";
import { BannerHeader } from "../styledComponents";

const Banner = ({ gauge }) => {
  return (
    <BannerHeader>
      <div className="box"></div>
      <div className="gauge" style={{ width: gauge + "%" }}></div>
    </BannerHeader>
  );
};

export default Banner;
