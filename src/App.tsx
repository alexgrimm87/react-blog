import {FC} from "react";
import {Header} from "./common/components/header/header.component";
import {Banner} from "./common/components/banner/banner.component";
import {Article} from "./common/modules/feed/components/article/article.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return(
    <div>
      <Header />
      <Banner />
      <Article />
    </div>
  );
};
