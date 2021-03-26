import PostsGrid from '../posts/posts-grid';
import classes from './home-content.module.css';

function HomeContent(props) {
    return (
        <section className={classes.home}>
            <div className={classes.posts}>
                <PostsGrid posts={props.posts} />
            </div>
            <div className={classes.gallery}>

            </div>
            <div className={classes.art}>

            </div>
        </section>
    )
}

export default HomeContent;