import { Fragment } from "react";
import Hero from '../components/home-page/hero';
import HomeContent from '../components/home-page/home-content';
import { getFeaturedPosts } from '../lib/posts-util.js';


function HomePage(props) {

    return (
        <Fragment>
            <Hero />
            <HomeContent posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;