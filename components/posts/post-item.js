import Link from 'next/link';
import classes from './post-item.module.css';


function PostItem(props) {
    const { slug, title, text, date } = props.post;
    console.log(date);

    const linkPath = `/posts/${slug}`;

    const formattedDate = new Date(date).toLocaleDateString('tr-TR');

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