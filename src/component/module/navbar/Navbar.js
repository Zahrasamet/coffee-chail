import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav className={`${styles.navbar} navbar-dark py-3`}>

       
        <ul className={styles.navbar_nav}>
          <li><Link href="/" className={`${styles.nav_link} ${styles.active_nav_link}`}>خانه</Link></li>
          <li><Link href="/" className={styles.nav_link}>درباره ما</Link></li>
          <li><Link href="/" className={styles.nav_link}>خدمات</Link></li>
          <li><Link href="/" className={styles.nav_link}>منو</Link></li>
          <li className={styles.dropdown}>
            <Link href="/" className={`${styles.nav_link} ${styles.dropdown_toggle}`} data-bs-toggle="dropdown">
              صفحات
            </Link>
            <ul className={styles.dropdown_menu}>
              <li><Link href="/" className={styles.dropdown_item}>Reservation</Link></li>
              <li><Link href="/" className={styles.dropdown_item}>Testimo</Link></li>
            </ul>
          </li>
          <li><Link href="/" className={styles.nav_link}>ارتباط با ما</Link></li>
        </ul>

        {/* عنوان سمت راست */}
        <Link href="/" className={styles.navbar_brand}>
          کافه‌چیل
        </Link>

      </nav>
    </div>
  )
}

export default Navbar
