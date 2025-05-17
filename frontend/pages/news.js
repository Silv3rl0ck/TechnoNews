import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function News() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug) {
      axios.get(`http://localhost:8000/api/articles/?slug=${slug}`)
        .then(res => {
          if (res.data.length) setArticle(res.data[0]);
        })
        .catch(err => console.error(err));
    }
  }, [slug]);

  if (!article) return <p className="main">Loading...</p>;
  return (
    <>
      <header>
        <nav className="nav">
          <Link href="/"><a>Home</a></Link>
          {article.category && <Link href={`/?category=${article.category.slug}`}><a>{article.category.name}</a></Link>}
        </nav>
      </header>
      <main className="main">
        <h1>{article.title}</h1>
        {article.image_url && <img src={article.image_url} alt={article.title} style={{width:'100%',borderRadius:'8px',marginBottom:'1rem'}} />}
        <p>{article.content}</p>
      </main>
      <footer>© {new Date().getFullYear()} TechnoNews</footer>
    </>
  );
}
