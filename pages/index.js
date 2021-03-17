import { Fragment } from "react";
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const dummy_posts = [
    {
        slug: 'sanki-oyleymis',
        title: "Sanki öyleymiş gibi",
        text: "Yanılmak her zaman haklı mıdır?",
        date: new Date()
    },
    {
        slug: 'sanki-oylsseymis',
        title: "Sanki öyleymiş gibi",
        text: "Yanılmak her zaman haklı mıdır?",
        date: new Date()
    }
];

function HomePage() {

    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={dummy_posts} />
        </Fragment>
    )
}

export default HomePage;