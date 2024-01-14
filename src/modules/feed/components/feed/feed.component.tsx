import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {FEED_PAGE_SIZE} from "../../consts";
import {FeedData} from "../../api/repository";
import {serializeSearchParams} from "../../../../utils/router";
import {Container} from "../../../../common/components/container/container.component";
import {FeedToggle} from "../feed-toggle/feed-toggle.component";
import {ArticleList} from "../article-list/article-list.component";
import {TagCloud} from "../tag-cloud/tag-cloud.component";

interface FeedProps {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;
  const handlePageChange = ({selected}: {selected: number}) => {
    setSearchParams(serializeSearchParams({page: String(selected)}));
  }

  if(isLoading || isFetching) {
    return (
      <Container>
        Feed loading...
      </Container>
    )
  }

  if(error) {
    return (
      <Container>
        Error while loading feed
      </Container>
    )
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <div className="w-3/4">
          <ArticleList list={data?.articles || []} />
          <nav className="my-4">
            <ReactPaginate
              pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex"
              pageClassName="group flex"
              pageLinkClassName="p-3 text-blog-green bg-white border border-blog-gray-300 -ml-px
              group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-blog-gray-200"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-blog-green group-[.active]:text-white
              group-[.active]:border-blog-green"
              onPageChange={handlePageChange}
              forcePage={page}
            />
          </nav>
        </div>
        <div className="w-1/4 pl-3">
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};
