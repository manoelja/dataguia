import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Layout } from '../components/Layout/Layout';
import { contentData } from '../data/content';
import Card from '../components/Card/Card';
import styles from './DetailPage.module.css';

const DetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  // Find the item in contentData
  const item = contentData
    .flatMap((section) => section.items)
    .find((i) => i.slug === slug && i.path.includes(category || ''));

  // Scroll to top when the slug changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  // Find related items (same section/category)
  const section = contentData.find((s) => s.items.some((i) => i.id === item.id));
  const relatedItems = section?.items || [];

  return (
    <Layout>
      <Helmet>
        <title>{`${item.title} | Guia de Dados`}</title>
        <meta name="description" content={item.shortDescription} />
      </Helmet>

      <nav className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>
          <HomeIcon size={16} />
        </Link>
        <ChevronRight size={16} className={styles.separator} />
        <span className={styles.breadcrumbCurrent}>{item.title}</span>
      </nav>

      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <ArrowLeft size={20} />
          Voltar para a Home
        </Link>
        <h1 className={styles.title}>{item.title}</h1>
      </div>

      <div className={styles.content}>
        <section className={styles.intro}>
          <p className={styles.shortDescription}>{item.shortDescription}</p>
          <div className={styles.mainDescription}>
            <h2>Sobre a Profissão</h2>
            <p>{item.fullDescription}</p>
          </div>
        </section>

        {/* Placeholders for practical content */}
        <section className={styles.details}>
          <div className={styles.detailBlock}>
            <h2>O que faz no dia a dia?</h2>
            <p>Este profissional atua na interseção entre tecnologia e negócios, garantindo que os dados gerem valor real para a organização.</p>
          </div>
          <div className={styles.detailBlock}>
            <h2>Principais Ferramentas</h2>
            <div className={styles.toolChips}>
              <span className={styles.toolChip}>Python</span>
              <span className={styles.toolChip}>SQL</span>
              <span className={styles.toolChip}>Cloud</span>
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Explore mais conteúdos desta categoria</h2>
          <div className={styles.relatedGrid}>
            {relatedItems.map((related) => (
              <div 
                key={related.id} 
                className={`${styles.relatedCardWrapper} ${related.id === item.id ? styles.activeCard : ''}`}
              >
                <Card item={related} />
                {related.id === item.id && (
                  <span className={styles.currentBadge}>Você está aqui</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DetailPage;
