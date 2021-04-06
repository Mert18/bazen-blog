
import classes from './main-navigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.navigation}>
                <Link activeClassName="selected" href="/"><span>ANA SAYFA</span></Link>
                <Link activeClassName="selected" href="/posts"><span>BLOG</span></Link>
                <Link activeClassName="selected" href="/gallery"><span>GALERİ</span></Link>
                <Link activeClassName="selected" href="/art"><span>SANAT</span></Link>
                <Link activeClassName="selected" href="/contact"><span>İLETİŞİM</span></Link>
            </div>
        </header>
    )
}

export default MainNavigation