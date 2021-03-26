import PostItem from './post-item';
import classes from './posts-grid.module.css';
import Link from 'next/link';
function PostsGrid(props) {
    const { posts } = props;
    return (
        <div className={classes.postgrid}>
            <div className={classes.title}>
                <li><Link href="/posts"><h2>Blog</h2></Link></li>
            </div>
            <ul className={classes.grid}>
                {posts.map((post) =>
                    <PostItem key={post.slug} post={post} />
                )
                }
            </ul>
        </div>
    )

}

export default PostsGrid;