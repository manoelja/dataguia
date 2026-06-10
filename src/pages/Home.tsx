import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import Filter from '../components/Filter/Filter';
import Section from '../components/Section/Section';
import { contentData } from '../data/content';
import type { Category } from '../data/types';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('Todos');

  return (
    <Layout>
      <Helmet>
        <title>Guia de Dados | O seu mapa na área de dados</title>
        <meta name="description" content="Explore as profissões, tecnologias e ferramentas da área de dados." />
      </Helmet>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Seu guia completo para a{' '}
          <span className={styles.highlight}>
            Área de{' '}
            <span className={styles.heroAnimatedWrapper}>
              
              {/* BLOCO DA PALAVRA "DADOS" */}
              <span className={styles.heroAnimatedItem}>
                <motion.span
                  animate={{ 
                    opacity: [1, 1, 0, 0, 1],
                    scale: [1, 1, 0.9, 0.9, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    times: [0, 0.45, 0.5, 0.95, 1],
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block', color: 'inherit' }}
                >
                  Dados
                </motion.span>
              </span>

              {/* BLOCO DO EMOJI 🎲 🎲*/}
              <span className={styles.heroAnimatedItem}>
                <motion.span
                  animate={{ 
                    opacity: [0, 0, 1, 1, 0],
                    scale: [0.9, 0.9, 1, 1, 0.9],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    times: [0, 0.45, 0.5, 0.95, 1],
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block' }}
                >
                  🎲
                </motion.span>
              </span>

            </span>
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          Descubra profissões, tecnologias, ferramentas e técnicas para se tornar um profissional de elite.
        </p>
      </section>

      <Filter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className={styles.sectionsContainer}>
        {contentData.map((section) => (
          <Section 
            key={section.id} 
            section={section} 
            activeFilter={activeFilter} 
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
