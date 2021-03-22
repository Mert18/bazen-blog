import PostsGrid from '../posts/posts-grid';
import classes from './home-content.module.css';

function HomeContent(props) {
    return (
        <section className={classes.home}>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default HomeContent;