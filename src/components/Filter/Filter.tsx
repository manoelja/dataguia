import React from 'react';
import { motion } from 'framer-motion';
import type { Category } from '../../data/types';
import styles from './Filter.module.css';

interface FilterProps {
  activeFilter: Category;
  onFilterChange: (filter: Category) => void;
}

const categories: Category[] = [
  'Todos',
  'Ciência de Dados',
  'Análise de Dados',
  'Engenharia de Dados'
];

const Filter: React.FC<FilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterChip} ${activeFilter === category ? styles.active : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {activeFilter === category && (
            <motion.div
              layoutId="active-pill"
              className={styles.activePill}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className={styles.chipText}>{category}</span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
