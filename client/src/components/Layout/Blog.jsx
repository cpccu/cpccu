import BlogHeader from "../BLOG/BlogHeader";
import BlogPostLayout from "../BLOG/BlogPostLayout";
import BlogScrollProvider from "../../Context/BlogScroll/BlogScrollProvider";

export default function Blog() {
  return (
    <BlogScrollProvider>
      <BlogHeader />
      <BlogPostLayout />
    </BlogScrollProvider>
  );
}
