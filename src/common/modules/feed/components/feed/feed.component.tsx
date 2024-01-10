import {FC} from "react";
import {Container} from "../../../../components/container/container.component";
import {FeedToggle} from "../feed-toggle/feed-toggle.component";
import {ArticleList} from "../article-list/article-list.component";

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
