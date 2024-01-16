import {FC} from "react";
import clsx from "clsx";

enum ButtonStyleEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

interface FollowButtonProps {
  username: string;
  btnStyle?: keyof typeof ButtonStyleEnum;
}

export const FollowButton:FC<FollowButtonProps> = ({
  username,
  btnStyle = ButtonStyleEnum.DARK
}) => {
  const btnClasses = clsx(
    'text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm active:bg-blog-gray-650',
    {
      'border-blog-gray-700 text-blog-gray-700 hover:bg-blog-gray-400 focus:bg-blog-gray-400' :
      btnStyle === ButtonStyleEnum.DARK,
      'border-blog-gray-400 text-blog-gray-400 hover:bg-blog-gray-400 hover:text-white' :
        btnStyle === ButtonStyleEnum.LIGHT
    }
  );

  return (
    <button className={btnClasses}>
      <i className="ion-plus-round" />
      &nbsp; Follow {username}
    </button>
  );
};
