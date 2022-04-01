import classes from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";

export default function Home({ posts }) {
  return (
    <div className={classes.container}>
      <ul className={classes.bloglist}>
        {posts.map(({ slug, frontmatter }) => (
          <li key={frontmatter.title}>
            <BlogPost slug={slug} frontmatter={frontmatter} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
