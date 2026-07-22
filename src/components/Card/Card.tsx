import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { CardItem } from '../../data/types';
import { saveHomeScrollPosition } from '../../hooks/useScrollMemory';
import { useCardExpanded } from '../../hooks/useSectionState';
import styles from './Card.module.css';

interface CardProps {
  item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useCardExpanded(item.id);
  const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <IconComponent size={24} className={styles.icon} />
        </div>
        <h3 className={styles.title}>{item.title}</h3>
      </div>

      <div className={styles.contentArea}>
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.p
              key="description"
              className={styles.shortDescription}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {item.shortDescription}
            </motion.p>
          ) : (
            <motion.div
              key="button"
              className={styles.footer}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.path}
                className={styles.continueButton}
                onClick={(e) => {
                  e.stopPropagation();
                  saveHomeScrollPosition();
                }}
              >
                Continuar
                <Icons.ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Card;
