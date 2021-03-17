
import PostHeader from './post-header';
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    slug: "sthstshst",
    title: "erererer",
    image: 'imageone.jpg',
    content: '## here are things',
    date: '20-03-2000',
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;