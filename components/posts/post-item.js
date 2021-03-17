import Link from 'next/link';
import classes from './post-item.module.css';


function PostItem(props) {
    const { slug, title, text, date } = props.post;

    const linkPath = `/posts/${slug}`;

    const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.content}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <time>{formattedDate}</time>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem;