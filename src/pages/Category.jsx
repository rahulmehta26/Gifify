/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/Context";
import GifCard from "../components/GifCard";
import SocialFollowOn from "../components/SocialFollowOn";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  const { category } = useParams();

  const { gif } = GifState();

  const fetchCategoryData = async () => {

    const { data } = await gif.gifs(category);

    setCategoryData(data);
  };

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  return (
    <div className=" flex flex-col sm:flex-row gap-5 my-4">
      <div className=" w-full sm:w-72 ">
        {categoryData.length > 0 && (
          <GifCard gif={categoryData[0]} hover={false} />
        )}
        <span className=" text-gray-400 text-sm pt-2 ">
          {" "}
          Don&#39;t tell it to me, GIF it to me!
        </span>

        <SocialFollowOn />

        <div
        className="divider"
        ></div>
      </div>

      <div>
        <h2
        className=" text-4xl pb-1 font-extrabold capitalize "
        >
          {
            category.split("-").join(" & ") 
          } GIFs
        </h2>
        <h2
        className=" text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer "
        >
          @{category}
        </h2>

        {
          categoryData.length > 0 && (

            <div
            className="columns-2 md:col-span-3 lg:columns-4 xl:columns-5 gap-4 "
            >
              {
                categoryData.slice(1).map((gif) => <GifCard key={gif.id} gif={gif} /> )
              }

            </div>
          )
        }
      </div>
    </div>
  );
};

export default Category;
