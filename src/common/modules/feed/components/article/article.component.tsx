import {FC} from "react";
import {Link} from "react-router-dom";
import {FavoriteButton} from "../favorite-button/favorite-button.component";
import {TagList} from "../tag-list/tag-list.component";

interface ArticleProps {}

export const Article:FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@user">
            <img className="inline-block h-8 w-8 rounded-full"
                 src="https://api.realworld.io/images/demo-avatar.png"
                 alt="avatar"/>
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
            <Link to="/@user" className="font-medium">User name</Link>
            <span className="text-blog-gray text-date">10 january, 2024</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to="/article/qwert" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-blog-darkestGray">Some title</h1>
          <p className="text-blog-darkenGray font-light mb-1">Some text</p>
          <div className="flex justify-between">
            <span className="text-blog-gray text-date font-light">Read more...</span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};
