import {FC} from "react";
import {Header} from "./common/components/header/header.component";
import {Banner} from "./common/components/banner/banner.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return(
    <div>
      <Header />
      <Banner />
    </div>
  );
};
