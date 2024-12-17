/* eslint-disable no-unused-vars */
import React from "react";

const SocialFollowOn = () => {

    const customIcon = 'size-6 object-cover invert '

  return (
    <div className=" faded-text pt-2 ">
      <span>Follow on:</span>

      <div className="flex gap-4 pt-3">
        <a href="https://github.com/rahulmehta26">
          <img
            src="/github.png"
            alt="Github"
            className={customIcon}
          />
        </a>
        <a href="www.linkedin.com/in/rahulmehta26">
          <img
            src="/linkedIn.png"
            alt="LinkedIn"
            className={customIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialFollowOn;
