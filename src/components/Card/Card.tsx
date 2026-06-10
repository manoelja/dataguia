import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { CardItem } from '../../data/types';
import styles from './Card.module.css';

interface CardProps {
  item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

  return (
    <motion.div 
      layout
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <IconComponent size={24} className={styles.icon} />
        </div>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
      
      <p className={styles.shortDescription}>{item.shortDescription}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.expandedContent}
          >
            <p className={styles.fullDescription}>{item.fullDescription}</p>
            {item.additionalInfo && (
              <ul className={styles.additionalInfo}>
                {item.additionalInfo.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            )}
            <Link to={item.path} className={styles.continueButton} onClick={(e) => e.stopPropagation()}>
              Continuar
              <Icons.ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
