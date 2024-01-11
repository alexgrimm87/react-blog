import {FC} from "react";

interface TagListProps {
  list: string[];
}

export const TagList: FC<TagListProps> = ({list}) => {
  return (
    <ul className="flex">
      {
        list.map((tag) => (
          <li key={tag} className="font-light text-date border border-blog-lightenGray text-blog-tag mr-1 mb-0.2
          px-tag rounded-tag">{tag}</li>
        ))}
    </ul>
  );
};
