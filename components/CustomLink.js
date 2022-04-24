import Link from 'next/link'; // Отменяет стандартное дествие браузера - перезагрузку страницы
import styles from '../styles/CustomLink.module.css';

export default function ({ text, href }) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}