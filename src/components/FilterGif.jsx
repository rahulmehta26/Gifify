/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { GifState } from "../context/Context";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import filterItems from "../constant/filterData";

const FilterGif = ({ alignLeft = false, showTrending = false }) => {
  const { filter, setFilter } = GifState();

  return (
    <div
      className={` flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center "
          : ""
      } `}
    >
      {showTrending && (
        <span className=" flex gap-2 items-center ">
          {showTrending && (
            <ArrowTrendingUpIcon className=" size-8 text-teal-400 " />
          )}
          <span className="font-semibold text-gray-400 ">Trending</span>
        </span>
      )}

      <div
      className=" flex min-w-80 rounded-full bg-gray-800 "
      >
        {filterItems?.map((info) => {
          return (
            <span
              onClick={() => setFilter(info?.value)}
              key={info?.id}
              className={` ${
                filter === info.value ? info?.backgroundColor : ""
              } font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer `}
            >
              {info?.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGif;
