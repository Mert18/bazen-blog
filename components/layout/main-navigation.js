
import classes from './main-navigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <ul>
                    <li><Link href="/"><span>Ana Sayfa</span></Link></li>
                    <li><Link href="/posts"><span>Blog</span></Link></li>
                    <li><Link href="/gallery"><span>Galeri</span></Link></li>
                    <li><Link href="/contact"><span>İletişim</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation