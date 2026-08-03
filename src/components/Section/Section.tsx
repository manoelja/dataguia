import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { SectionData, Category } from '../../data/types';
import Card from '../Card/Card';
import { useSectionShowAll } from '../../hooks/useSectionState';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './Section.module.css';

interface SectionProps {
  section: SectionData;
  activeFilter?: Category;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Section: React.FC<SectionProps> = ({ section, activeFilter = 'Todos' }) => {
  const [showAll, setShowAll] = useSectionShowAll(section.id);

  const filteredItems = section.items.filter(item =>
    activeFilter === 'Todos' || item.categories.includes(activeFilter)
  );

  // Mobile (≤768px) mostra 4 cards por padrão; desktop mostra 6.
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const visibleCount = isDesktop ? 6 : 4;

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: '-50px' });

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{section.title}</h2>

      <motion.div
        ref={gridRef}
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {visibleItems.map(item => (
          <motion.div
            key={item.id}
            variants={itemVariants}
          >
            <Card item={item} />
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <button
          className={styles.viewMoreButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <>Ver menos <ChevronUp size={20} /></>
          ) : (
            <>Ver mais <ChevronDown size={20} /></>
          )}
        </button>
      )}
    </section>
  );
};

export default Section;
