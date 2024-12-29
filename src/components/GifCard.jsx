/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderDiv = ({ onClick, title }) => {
  return (
    <>
      <div className=" flex items-center justify-between ">
        <h1 className=" font-extrabold text-lg ">{title}</h1>

        <XMarkIcon
          className=" size-6 font-extrabold cursor-pointer "
          onClick={onClick}
        />
      </div>

      <hr className=" w-full h-0.2 my-1 bg-[#fff] " />
    </>
  );
};

const GifCard = ({
  hover = false,
  gif,
  isShare = false,
  isEmbed = false,
  setIsEmbed,
  setIsShare,
}) => {

  const [embedCodes, setEmbedCodes] = useState('')

  useEffect(() => {
    if (isEmbed && gif?.embed_url) {
      const embedCode = `<iframe src="${gif.embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
      setEmbedCodes(embedCode);
      setIsShare(false)
    }
  }, [isEmbed, gif]);

  const copyLinkToClipboard = (e) => {
    e.preventDefault();
    const gifLink =
      gif.type === "text"
        ? `/${gif.type}/${gif.slug}`
        : `/${gif.type}s/${gif.slug}`;
    navigator.clipboard.writeText(window.location.origin + gifLink).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  const copyEmbedCodeToClipboard = (e) => {
    e.preventDefault();
    const embedCode = `<iframe src="${gif.embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    navigator.clipboard.writeText(embedCode).then(() => {
      alert("Embed code copied to clipboard!");
    });
  };

  return (
    <Link
      to={
        gif.type === "text"
          ? `/${gif.type}/${gif.slug}`
          : `/${gif.type}s/${gif.slug}`
      }
    >
      <div
        className={` w-full mb-2 relative ${
          hover ? "cursor-pointer" : "cursor-default"
        } group`}
      >
        <img
          src={gif?.images?.preview_webp?.url}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-300 "
        />

        {hover && (
          <div className=" absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-[#000] font-bold flex items-end gap-2 p-2 ">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-8"
            />

            <span>{gif?.user?.display_name}</span>
          </div>
        )}

        {isShare && (
          <div className=" absolute inset-0 rounded backdrop-blur-sm bg-[#00000061] font-bold p-6 ">
            <HeaderDiv
              onClick={() => setIsShare((prev) => !prev)}
              title="Share"
            />

            <div className="flex relative justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.25,
                    ease: "easeIn",
                  },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.25,
                    ease: "easeIn",
                  },
                }}
                onClick={copyLinkToClipboard}
                className="w-52 absolute top-80 gradient p-2 rounded "
              >
                Share
              </motion.button>
            </div>
          </div>
        )}

        {isEmbed && (
          <div className=" absolute inset-0 rounded bg-[#00000061] font-bold gap-2 p-6 ">
            <HeaderDiv
              title="Embed GIF "
              onClick={() => setIsEmbed((prev) => !prev)}
            />

            <div className=" space-y-4 ">
              <p className="text-sm font-medium text-[#fff] w-[75%] ">
                Want to embed this Gif on your website or blog? Just drop in the
                embed code below and you're done!
              </p>

              <div className=" text-[#fff] ">Embed Code</div>


                <div className="flex relative">
                  <p className=" w-full px-2 whitespace-nowrap py-1.5 line-clamp-1 text-sm font-medium text-[#000] rounded-l bg-[#fff]  ">
                    {
                      embedCodes ? embedCodes : "No embed code is available"
                    }
                  </p>

                  <button onClick={copyEmbedCodeToClipboard} className=" whitespace-nowrap px-4 bg-gradient-to-tr  from-purple-600 via-purple-500 to-purple-400 text-white text-sm rounded-r ">Copy Code</button>

              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default GifCard;
