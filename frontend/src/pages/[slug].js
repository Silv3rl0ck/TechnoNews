// frontend/src/pages/article/[slug].js
import { useRouter } from 'next/router';
import axios from 'axios';
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ArticleDetail({ article }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div style={{ textAlign: 'center', marginTop: '3rem' }}>Article not found.</div>;
    }

    return (
        <div className="article-container" style={{
            maxWidth: '800px',
            margin: '2rem auto',
            padding: '2rem',
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 2px 18px rgba(0,0,0,0.06)'
        }}>
            <h1>{article.title}</h1>
            <img src={article.image_url} alt={article.title} style={{
                width: '100%',
                borderRadius: '16px',
                marginBottom: '2rem',
                objectFit: 'cover',
                maxHeight: '350px'
            }} />
            <p className="meta">{new Date(article.published_date).toLocaleDateString()}</p>
            <div style={{ fontSize: '1.09rem', lineHeight: '1.7' }}>
                {article.content}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/`);
  const data = await res.json();
  const paths = data.results.map(a => ({ params: { slug: a.slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${API}/articles/${params.slug}/`);
  const article = await res.json();
  return { props: { article } };
}
