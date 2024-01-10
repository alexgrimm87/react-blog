import {FC} from "react";
import {Container} from "../container/container.component";

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div>
      <div className="bg-blog-green shadow-banner text-white p-8 mb-8">
        <Container>
          <h1 className="font-titillium drop-shadow-logo text-center text-logo pb-2">react blog</h1>
          <p className="text-center text-2xl font-light">A place to share your knowledge.</p>
        </Container>
      </div>
    </div>
  );
};
