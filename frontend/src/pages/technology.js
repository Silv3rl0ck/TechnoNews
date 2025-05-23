import React from 'react';
import ArticleCard from '../components/ArticleCard';
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Technology({ articles }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 1rem',
      }}
    >
      <h1
        style={{
          fontWeight: 800,
          fontSize: '2rem',
          marginBottom: '1.5rem',
        }}
      >
        Technology
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.2rem',
          justifyContent: 'center', // Center cards if not filling row
        }}
      >
        {articles.map(article => (
          <div
            key={article.id}
            style={{
              maxWidth: '350px',
              width: '100%',
              margin: '0 auto', // Extra centering for single card
            }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
      {articles.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: '#888',
          }}
        >
          No technology articles found.
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  // use your Render env var, or fallback to localhost for local dev:
  const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';
  const res = await fetch(`${API}/articles/`);
  const data = await res.json();

  // filter for technology
  const filtered = (data.results || []).filter(
    (a) => typeof a.category === 'string' && a.category.toLowerCase() === 'technology'
  );

  return {
    props: { articles: filtered },
    revalidate: 60,
  };
}
