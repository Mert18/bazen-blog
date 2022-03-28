import styles from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>zaten</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={frontmatter.title}>
            <Link href={`/blog/${slug}`}>
              <a>
                <h1 className="p-4">{frontmatter.title}</h1>
              </a>
            </Link>
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
