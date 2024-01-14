import {FC} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";

enum TagListStyle {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

interface TagListProps {
  list: string[];
  itemStyle?: keyof typeof TagListStyle;
  itemAs?: 'li' | 'a';
}

export const TagList: FC<TagListProps> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = 'li'
}) => {
  const itemClasses = clsx(
    'font-light text-date border mr-1 mb-0.2 px-tag rounded-tag',
    {
      'border-blog-gray-300 text-blog-gray-600':
        itemStyle === TagListStyle.LIGHT,
      'bg-blog-gray-800 text-white border-blog-gray-800 hover:bg-blog-gray-900':
        itemStyle === TagListStyle.DARK,
      'hover:text-white hover:no-underline':
        itemStyle === TagListStyle.DARK && itemAs === 'a'
    }
  );

  return (
    <ul className="flex flex-wrap">
      {list.map((tag) => {
        return itemAs === 'li' ? (
          <li key={tag} className={itemClasses}>{tag}</li>
        ) : (
          <Link to={`/?tag=${tag}`} key={tag} className={itemClasses}>{tag}</Link>
        );
      })}
    </ul>
  );
};
