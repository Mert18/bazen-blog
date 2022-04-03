import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import classes from "./Blog.module.css";
import Head from "next/head";

export default function Blog({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Hayata dair düşünceler, denemeler." />
        <meta property="og:title" content="Zaten" />
        <meta property="og:description" content="Zaten" />
        <meta property="og:url" content="https://merd.blog/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.post}>
        <div className={classes.content}>
          <section className={classes.header}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.desc}</p>
            <p className={classes.date}>{frontmatter.date}</p>

            <div className={classes.divider}> </div>
          </section>

          <section
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
