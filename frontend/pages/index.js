import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    let url = 'http://localhost:8000/api/articles/';
    if (category) url += `?category=${category}`;
    axios.get(url)
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <>
      <header>
        <nav className="nav">
          <Link href="/"><a>Home</a></Link>
          {categories.map(cat => (
            <Link key={cat._id} href={`/?category=${cat.slug}`}><a>{cat.name}</a></Link>
          ))}
        </nav>
      </header>
      <main className="main">
        <h1>TechnoNews</h1>
        <div className="grid">
          {articles.map(a => (
            <Link key={a._id} href={`/news?slug=${a.slug}`}>
              <a className="card">
                {a.image_url && <img src={a.image_url} alt={a.title} />}
                <div className="card-content">
                  <h2 className="card-title">{a.title}</h2>
                  <p className="card-excerpt">{a.excerpt}...</p>
                  <div className="card-date">{new Date(a.created_at).toLocaleDateString()}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <footer>© {new Date().getFullYear()} TechnoNews</footer>
    </>
  );
}
