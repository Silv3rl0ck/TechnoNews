import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a>TechnoNews</a>
          </Link>
        </div>
        <nav className={styles.navlinks}>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href="/technology" legacyBehavior>
            <a className={router.pathname === "/technology" ? styles.active : ""}>Technology</a>
          </Link>
          <Link href="/innovation" legacyBehavior>
            <a className={router.pathname === "/innovation" ? styles.active : ""}>Innovation</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
