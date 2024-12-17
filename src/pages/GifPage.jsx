/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/Context";
import GifCard from "../components/GifCard";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  CodeBracketIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import SocialFollowOn from "../components/SocialFollowOn";

const gifType = ["gifs", "stickers", "text"];

const GifPage = () => {
  const { type, slug } = useParams();

  const { gif, favourites, addToFavourites } = GifState();

  const [gifData, setGifData] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const fetchGif = async () => {
    const gifId = slug.split("-");

    const { data } = await gif.gif(gifId[gifId.length - 1]);
    const related = await gif.related(gifId[gifId.length - 1]);

    setGifData(data);
    setRelatedGifs(related.data);
  };

  useEffect(() => {
    if (!gifType.includes(type)) {
      throw new Error("Invalid Content Type");
    }

    fetchGif();
  }, []);

  const shareGif = () => {};

  const embedGif = () => {};

  return (
    <div className=" grid grid-cols-4 my-10 gap-4">
      <div className=" hidden sm:block ">
        {gifData?.user && (
          <>
            <div className=" flex gap-1 ">
              <img
                src={gifData?.user?.avatar_url}
                alt={gifData?.user?.display_name}
                className="h-14"
              />

              <div className=" px-2 ">
                <div className=" font-bold ">{gifData?.user?.display_name}</div>
                <div className=" faded-text cursor-pointer ">
                  @{gifData?.user?.username}
                </div>
              </div>
            </div>
            {gifData?.user?.description && (
              <p className=" py-4 whitespace-pre-line text-sm text-gray-400 ">
                {readMore
                  ? gifData?.user?.description
                  : gifData?.user?.description.slice(0, 100)}
                <div
                  className=" flex items-center gap-1 faded-text cursor-pointer "
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      Read less <ChevronUpIcon className="size-5" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDownIcon className="size-5" />
                    </>
                  )}
                </div>
              </p>
            )}
          </>
        )}

        <SocialFollowOn />

        <div className=" divider "></div>

        {gifData?.source && (
          <div>
            <span>Source</span>

            <div className=" flex items-center text-sm font-bold gap-1 ">
              <ArrowTopRightOnSquareIcon className=" size-8 " />
              <a href={gifData.source} target="_blank" className="truncate">
                {gifData?.source}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className=" col-span-4 sm:col-span-3 ">
        <div className=" flex gap-6 ">
          <div className=" w-full sm:w-3/4 ">
            <div className=" faded-text truncate mb-2 ">{gifData?.title}</div>

            <GifCard gif={gifData} hover={false} />

            <div className=" flex sm:hidden ">
              <img
                src={gifData?.user?.avatar_url}
                alt={gifData?.user?.display_name}
                className="h-14"
              />

              <div className=" px-2 ">
                <div className=" font-bold ">{gifData?.user?.display_name}</div>
                <div className=" faded-text cursor-pointer ">
                  @{gifData?.user?.username}
                </div>
              </div>

              <button
                // onClick={shareGif}
                className="ml-auto"
              >
                <PaperAirplaneIcon className="size-6 -rotate-[25deg] " />
              </button>
            </div>
          </div>

          <div className=" hidden sm:flex flex-col gap-5 mt-6 ">
            <button
              onClick={() => addToFavourites(gifData.id)}
              className=" flex gap-5 items-center font-bold text-lg "
            >
              <HeartIcon
                className={`size-6 ${
                  favourites.includes(gifData.id) ? "text-red-500 fill-red-500 " : ""
                } `}
              />
              Favourites
            </button>

            <button
              // onClick={shareGif}
              className=" flex gap-5 items-center font-bold text-lg "
            >
              <PaperAirplaneIcon className="size-6 -rotate-[35deg] " />
              Share
            </button>

            <button
              // onClick={shareGif}
              className=" flex gap-5 items-center font-bold text-lg "
            >
              <CodeBracketIcon className="size-6" />
              Embed
            </button>
          </div>
        </div>

        <div>
          <span className=" font-extrabold ">Related GIFs</span>

          <div className="columns-2 md:col-span-3 lg:columns-4 xl:columns-5 gap-4 ">
            {relatedGifs?.slice(1).map((gif) => <GifCard key={gif.id} gif={gif} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifPage;
