import classes from "./Layout.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  if (typeof window !== "undefined") {
  window.addEventListener("scroll", toggleVisible);
}

  return (
    <div className={classes.layout}>
      <div className={classes.left}></div>
      <main className={classes.main}>{children}</main>
      <ul className={classes.buttons}>
        {visible ? (
          <li onClick={scrollToTop}>
            <p>En Üst</p>
          </li>
        ) : (
          ""
        )}

        <li>
          <Link href="/">Ana Sayfa</Link>
        </li>
      </ul>
    </div>
  );
}
