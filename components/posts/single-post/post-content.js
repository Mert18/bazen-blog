
import PostHeader from './post-header';
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown';


function PostContent(props) {

    const { post } = props;
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR');

    return (

        <article className={classes.singlepost}>
            <PostHeader title={post.title} />
            <h2>{formattedDate}</h2>

            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;