
import PostHeader from './post-header';
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    slug: "sthstshst",
    title: "erererer",
    content: '## here are things',
    date: '2000-20-03',
};

function PostContent() {

    return (
        <article>
            <PostHeader title={DUMMY_POST.title} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;