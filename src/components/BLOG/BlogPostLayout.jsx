import { useContext, useEffect } from "react";
import Data from "./../../../data/GallaryCard.json";
import BlogMainCard from "./BlogMainCard";
import BlogScroll from "../../Context/BlogScroll/BlogScroll";

export default function BlogPostLayout() {
  const { setBlogTarget } = useContext(BlogScroll);

  useEffect(() => {
    setBlogTarget("blogMainLayout");
  }, []);

  return (
    <main
      id="blogMainLayout"
      className="bg-responsibility py-20 md:py-28 lg:py-32 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em] grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7"
    >
      {Data.map((item, index) => (
        <BlogMainCard Data={item} />
      ))}
    </main>
  );
}
