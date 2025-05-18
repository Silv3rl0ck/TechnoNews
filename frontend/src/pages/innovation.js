import React from 'react';
import ArticleCard from '../components/ArticleCard';
const API = https://technonews.onrender.com/api

export default function Innovation({ articles }) {
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
        Innovation
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.2rem',
          justifyContent: 'center',
        }}
      >
        {articles.map(article => (
          <div
            key={article.id}
            style={{
              maxWidth: '350px',
              width: '100%',
              margin: '0 auto',
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
          No innovation articles found.
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/articles/');
  const data = await res.json();
  const filtered = data.results.filter(
    a => typeof a.category === 'string' && a.category.toLowerCase() === 'innovation'
  );
  return {
    props: { articles: filtered },
  };
}
