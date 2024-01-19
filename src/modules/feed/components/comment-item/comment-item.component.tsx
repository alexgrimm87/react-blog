import {FC} from "react";
import {Author} from "../../api/dto/global-feed.in";
import {CommentMeta} from "../comment-meta/comment-meta.component";

interface CommentItemProps {
  body: string;
  author: Author;
  publishedAt: string;
  slug: string;
  commentId: number;
}

export const CommentItem:FC<CommentItemProps> = ({
  body,
  author,
  publishedAt,
  slug,
  commentId
}) => {
  return (
    <div className="border border-blog-gray-250 rounded">
      <div className="p-5">
        <p>{body}</p>
      </div>
      <div className="border-t border-blog-gray-250 bg-blog-gray-150 py-3 px-5">
        <CommentMeta
          authorNameStyle="GREEN"
          author={author}
          publishedAt={publishedAt}
          authorDirection="ROW"
          authorNameSize="SM"
          slug={slug}
          commentId={commentId}
        />
      </div>
    </div>
  );
};
