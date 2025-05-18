import Link from 'next/link';
import styles from './Article.module.css'; // Use your CSS module if you have one

export default function ArticleCard({ article }) {
  return (
    <Link href={`/${article.slug}`} passHref legacyBehavior>
      <a className={styles.card}>
        <img
          src={article.image_url}
          alt={article.title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3>{article.title}</h3>
          <p>{article.excerpt || (article.content && article.content.slice(0, 140))}</p>
        </div>
      </a>
    </Link>
  );
}
