import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";

import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { LinkPreview } from "@/components/LinkPreview";
import { useTheme } from "next-themes";

export default function Home() {
  const [colors, setColors] = useState([]);
  // const [tempInterval, setTempInterval] = useState(null);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Pratyush Mahapatra"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex md:w-3/4 flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I’m Pratyush Mahapatra
            </h1>

            <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
              🖥 I’m a developer, writer, and a creator. <br />
              🗒 I am currently{" "}
              <span className="font-bold">
                <span className="text-red-500">Looking for opportunities</span>
              </span>{" "}
              as a{" "}
              <span className="dark:text-white font-bold">
                {" "}
                Frontend Engineer.{" "}
              </span>{" "}
              <br />
              🔨 Building{" "}
              <LinkPreview url="https://just-another-javascript-blog.vercel.app/">
                <span className="text-black dark:text-white">
                  Just another Javascript Blog{" "}
                </span>
              </LinkPreview>
              <br />
              🐥 I{" "}
              <a
                className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600"
                target="__blank"
              >
                <LinkPreview url="https://twitter.com/pranikz">
                  <span className=" text-blue-500 dark:text-blue-500">
                    Tweet
                  </span>
                </LinkPreview>
              </a>{" "}
              about technology, learning and{" "}
              <a
                className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600"
                target="__blank"
              >
                <LinkPreview url="https://pranikz.netlify.app/meme.jpg">
                  <span className=" text-blue-500 dark:text-blue-500">
                    Memes
                  </span>
                </LinkPreview>
              </a>{" "}
            </h2>
          </div>

          <a
            href="https://twitter.com/pranikz"
            className="md:flex hidden md:w-1/4 flex-col relative"
            target="__blank"
          >
            <div className="absolute w-full h-full rounded-full transform scale-110 shadow-xl bg-gradient-to-r from-red-300 via-red-400 to-red-500" />
            <img
              src="avatar-new.png"
              className="rounded-full max-w-[200px]  z-0"
            />
          </a>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blogs
        </h3>
        Coming soon 🏎️
        {/* <BlogPost
          title="Ace the Javascript Interview - Practical questions to help you clear your next interview"
          summary="Ace your next Javascript Interview - Practice these topics in depth with examples and code snippets."
          slug="ace-the-javascript-interview"
        />
        
        <Link href="/blog">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See All Blogs
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Just another Javascript Blog"
          description="Brushup all your javascript skills at one place. No googling around all infos required about your interviews at one place."
          href="https://just-another-javascript-blog.vercel.app/"
          tags={["Tailwind", "Next.js", "Opensource"]}
        />
        <ProjectCard
          title="Mern Dairy"
          description="Note taking app which saves your thoughts securely over cloud! a full Note app with instant updates on dashboard using A Custom built CRUD API with nodeJS and
          expressJS and ReactJS, Redux and Tailwind on the Frontend "
          href="https://github.com/pranikz/MERN-dairy"
          tags={["React", "TailwindCSS"]}
        />
        <ProjectCard
          title="News App"
          description="Get the latest news right into your screens without ads. full news app with daily updates on live server using A news api and ReactJS and Bootstrap on the
          frontend implementing lazy loading pagination. "
          href="https://inshorts-clone-pratt.netlify.app/"
          tags={["React", "TailwindCSS"]}
        />
        {/* <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link> */}
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        />
        <Contact />
      </div>
    </Container>
  );
}
