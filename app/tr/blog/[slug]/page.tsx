import SingleBlogContent from "@/components/page/SingleBlogContent";
import { ISingleBlogContent } from "@/util/types";

const Post = ({ params }: ISingleBlogContent) => {
  return <SingleBlogContent params={params} />;
};

export default Post;
