import React, { createContext, useContext, useState } from 'react';
import type { Category } from '../data/types';

interface FilterContextType {
  activeFilter: Category;
  setActiveFilter: (filter: Category) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState<Category>('Todos');

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
