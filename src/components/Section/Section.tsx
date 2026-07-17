import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { SectionData, Category } from '../../data/types';
import Card from '../Card/Card';
import { useSectionShowAll } from '../../hooks/useSectionState';
import styles from './Section.module.css';

interface SectionProps {
  section: SectionData;
  activeFilter?: Category;
}

const Section: React.FC<SectionProps> = ({ section, activeFilter = 'Todos' }) => {
  const [showAll, setShowAll] = useSectionShowAll(section.id);

  const filteredItems = section.items.filter(item => 
    activeFilter === 'Todos' || item.categories.includes(activeFilter)
  );

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3);
  const hasMore = filteredItems.length > 3;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{section.title}</h2>
      
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode='popLayout'>
          {visibleItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
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
