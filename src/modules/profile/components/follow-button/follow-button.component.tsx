import {FC} from "react";

interface FollowButtonProps {}

export const FollowButton:FC<FollowButtonProps> = () => {
  return (
    <button className="text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm
    border-blog-gray-700 text-blog-gray-700 hover:bg-blog-gray-400 focus:bg-blog-gray-400 active:bg-blog-gray-650">
      <i className="ion-plus-round" />
      &nbsp; Follow User
    </button>
  );
};
