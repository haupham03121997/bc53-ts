import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBannersAPI } from "../../../apis/movie.api";

const Banner: React.FC = (): JSX.Element => {
  const { data = [] } = useQuery({
    queryKey: ["banners"],
    queryFn: getBannersAPI,
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <img src={item.hinhAnh} height={500} />
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
