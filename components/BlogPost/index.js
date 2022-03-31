import Link from "next/link";
import classes from "./BlogPost.module.css";

export default function BlogPost({ key, slug, frontmatter }) {
  return (
    <div className={classes.blogpost} key={key}>
      <Link href={`/blog/${slug}`}>
        <a>
          <p className={classes.title}>{frontmatter.title}</p>
          <p className={classes.desc}>{frontmatter.desc}</p>
          <p className={classes.date}>{frontmatter.date}</p>
        </a>
      </Link>
      <div className={classes.divider}></div>
    </div>
  );
}
