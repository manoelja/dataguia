export type Category = 'Ciência de Dados' | 'Análise de Dados' | 'Engenharia de Dados' | 'Todos';

export type DetailSectionType = 'text' | 'list' | 'chips';

export interface DetailSection {
  label: string;
  content: string | string[];
  type: DetailSectionType;
}

export interface CardItem {
  id: string;
  title: string;
  icon: string; // Lucide icon name or path
  shortDescription: string;
  fullDescription: string;
  details?: DetailSection[];
  additionalInfo?: string[];
  categories: Category[];
  slug: string;
  path: string; // e.g., '/profissoes/analista-de-dados'
}

export interface SectionData {
  id: string;
  title: string;
  items: CardItem[];
  hasFilter?: boolean;
}
