import { useState } from "react";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

// Ghost CMS Way
// async function getPosts() {
//   const res = await fetch(
//     `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time,published_at`
//   ).then((res) => res.json());

//   const frontMatter = res.posts;

//   return frontMatter;
// }

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blogs – Pratyush Mahapatra"
      description="Thoughts on the Software Development, Programming, Tech, Freelancing, Open Source and Memes"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been programming for almost 8 years now. Throughout this year, I've worked with various technologies. I'm here to share just that.
            
            Use the search below to filter by title.`}
        </p>
        Blogs coming sooner than you expect 🚀
      </div>
    </Container>
  );
}
