/* eslint-disable no-unused-vars */
import React from "react";
import { GifState } from "../context/Context";

const NavbarSkeleton = () => {
  const { favourites } = GifState();

  return (
    <>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <div className="flex items-center gap-x-3">
          <div className="size-12 rounded-full shimmerBG" />
          <div className="w-24 rounded h-10 shimmerBG" />
        </div>

        <div className="flex gap-4 items-center">
          {Array(5)
            .fill(null)
            .map((info, i) => (
              <div key={i} className="w-24 rounded p-3 shimmerBG hidden lg:block" />
            ))}
          <div className="w-4 px-2 hidden rounded lg:block py-4 shimmerBG" />

          {favourites.length > 0 && (
            <div className=" h-10 w-32 rounded shimmerBG "></div>
          )}
        </div>
      </div>

      <div className=" w-full rounded shimmerBG py-8 " />
    </>
  );
};

const FilterSkeleton = () => {
  return <div className="w-80 mt-4 py-6 rounded-full shimmerBG " />;
};

export const CardSkeleton = () => {
  const randomSize = () => {
    const width = Math.floor(Math.random() * (120 - 60 + 1)) + 200;
    const height = Math.floor(Math.random() * (200 - 100 + 1)) + 150;
    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div className="columns-1 w-full justify-between md:columns-3 overflow-hidden lg:columns-4 xl:columns-5 gap-4 mt-4">
      {Array(10)
        .fill(null)
        .map((_, i) => ( 
          <div
            key={i}
            className=" shimmerBG mb-2 relative rounded"
            style={randomSize()}
          ></div>
        ))}
    </div>
  );
};

export const Gifs = () => {
  return(
    <div>

      <div
      className=" shimmerBG w-[90%] h-[30rem] mx-auto "
      >

      </div>
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className="bg-[#fff] px-8 md:px-20 py-4 mx-auto absolute overflow-hidden top-0 left-0 z-10 w-full h-dvh ">
      <NavbarSkeleton />

      <div className=" w-full mt-4 rounded shimmerBG py-16 " />

      <div className=" sm:flex mt-4 justify-between items-center ">

        <div className=" w-32 rounded shimmerBG py-4 " />

        <FilterSkeleton />
      </div>

      <CardSkeleton />
    </div>
  );
};

export default Skeleton;
