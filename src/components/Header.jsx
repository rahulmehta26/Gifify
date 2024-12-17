/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Bars3Icon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GifState } from "../context/Context";
import SearchBar from "./SearchBar";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  const { gif, favourites } = GifState();

  const fetchCategories = async () => {
    try {
      const { data } = await gif.categories();
      setCategories(data);
    } catch (error) {
      return error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav>
      <div className=" relative flex gap-4 justify-between items-center mb-2 ">
        <Link to="/" className=" flex gap-x-3 ">
          <img src="/logo.svg" className="w-10 invert " alt="Gifify logo" />

          <h1 className="text-5xl font-bold tracking-tight cursor-pointer ">
            GIFIFY
          </h1>
        </Link>

        <div className=" font-bold text-md flex gap-4 items-center ">
          {categories?.slice(0, 5).map((info) => {
            return (
              <Link
                key={info?.name}
                to={`/${info?.name_encoded}`}
                className=" px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {info?.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategory(!showCategory)}>
            <EllipsisVerticalIcon
              className={` size-10 hover:gradient py-0.5 ${
                showCategory ? "gradient" : "border-b-4 hidden lg:block"
              } `}
            />
          </button>

          {favourites.length > 0 && (
            <div className=" h-10 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded ">
              <Link to="/favourites">Favourite GIFs</Link>
            </div>
          )}

          <button className=" block lg:hidden ">
            <Bars3Icon className="size-8" />
          </button>
        </div>

        {showCategory && (
          <div className=" absolute right-0 top-[110%] px-10 pt-6 space-y-4 pb-9 w-full gradient z-20 ">
            <span className=" text-3xl font-extrabold ">Categories</span>
            <hr className=" bg-gray-100/50  my-5 " />

            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
              {categories?.map((info) => {
                return (
                  <Link
                    to={`/${info?.name_encoded}`}
                    key={info?.name}
                    className="font-bold"
                    onClick={() => setShowCategory(!showCategory) }
                  >
                    {info?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <SearchBar />
    </nav>
  );
};

export default Header;
