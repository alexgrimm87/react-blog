import {FC} from "react";
import ReactPaginate from "react-paginate";
import {FEED_PAGE_SIZE} from "../../consts";
import {FeedData} from "../../api/repository";
import {usePageParam} from "../../hooks/use-page-param.hook";
import {ArticleList} from "../article-list/article-list.component";

interface FeedProps {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

export const Feed: FC<FeedProps> = ({isLoading, isFetching, error, data}) => {
  const {page, setPage} = usePageParam();
  const handlePageChange = ({selected}: {selected: number}) => {
    setPage(selected);
  }

  if (isLoading || isFetching) {
    return <p className="mt-4">Feed loading...</p>;
  }

  if (error) {
    return <p className="mt-4">Error while loading feed</p>;
  }

  if (data?.articlesCount === 0) {
    return <p className="mt-4">No articles are here... yet.</p>;
  }

  return (
    <>
      <ArticleList list={data?.articles || []} />
      <nav className="my-4">
        <ReactPaginate
          pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
          pageRangeDisplayed={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
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
    </>
  );
};
