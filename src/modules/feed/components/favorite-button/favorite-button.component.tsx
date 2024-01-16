import {FC} from "react";

interface FavoriteButtonProps {
  count: number;
  extended?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({count, extended = false}) => {
  return (
    <button className="text-blog-green border-blog-green text-center align-middle cursor-pointer select-none border py-1
    px-2 text-sm rounded-buttonSm hover:text-white hover:bg-blog-green focus:text-white focus:bg-blog-darkGreen">
      <i className="ion-heart"></i>
      <span className="ml-1 font-normal">
        {extended && 'Favorite Article ('}
        {count}
        {extended && ')'}
      </span>
    </button>
  );
};
