import {FC} from "react";
import {Header} from "./common/components/header/header.component";
import {Banner} from "./common/components/banner/banner.component";
import {Feed} from "./common/modules/feed/components/feed/feed.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return(
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};
