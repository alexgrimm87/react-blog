import {FC} from "react";

interface TagListProps {}

export const TagList: FC<TagListProps> = () => {
  return (
    <ul className="flex">
      <li className="font-light text-date border border-blog-lightenGray text-blog-tag mr-1 mb-0.2 px-tag rounded-tag">
        tag
      </li>
      <li className="font-light text-date border border-blog-lightenGray text-blog-tag mr-1 mb-0.2 px-tag rounded-tag">
        tag
      </li>
      <li className="font-light text-date border border-blog-lightenGray text-blog-tag mr-1 mb-0.2 px-tag rounded-tag">
        tag
      </li>
      <li className="font-light text-date border border-blog-lightenGray text-blog-tag mr-1 mb-0.2 px-tag rounded-tag">
        tag
      </li>
    </ul>
  );
};
