import Link from "next/link";
import styles from '@/styles/Navbar.module.css'

export default function () {
  return (
    <nav className={styles.nav}>
      <Link href="/">Welcome</Link>
      <Link href="/timeline">Timeline</Link>
    </nav>
  )
}
