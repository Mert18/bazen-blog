
import AllPosts from '../../components/posts/all-posts';

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

function AllPostsPage(props) {

    return (
        <AllPosts posts={dummy_posts} />
    )

}

export default AllPostsPage;