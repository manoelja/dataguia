import React, { useState } from 'react';
import { Sun, Moon, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import styles from './Layout.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>
            Guia de{' '}
            <span className={styles.logoStaticWrapper}>
              <span className={styles.logoStaticText}>Dados</span>
              <span className={styles.logoStaticEmoji}>🎲</span>
            </span>
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.projectInfo}>
            <h3 className={styles.footerTitle}>Guia de Estudos da Área de Dados</h3>
            <p className={styles.footerSynopsis}>
              Uma plataforma educativa criada para organizar o vasto conhecimento do universo de dados. 
              Do Big Data à IA Agêntica, este guia é o seu mapa para navegar em carreiras, tecnologias e ferramentas.
            </p>
          </div>
          
          <div className={styles.developerInfo}>
            <h4 className={styles.devName}>Desenvolvido por Manoel — Data Scientist</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="GitHub">
                <Globe size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">
                <Globe size={20} />
              </a>
              <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Portfólio">
                <Globe size={20} />
              </a>
              <button 
                className={`${styles.socialIcon} ${showAbout ? styles.activeAbout : ''}`} 
                onClick={() => setShowAbout(!showAbout)}
                title="Sobre mim"
              >
                <User size={20} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showAbout && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.aboutExpanded}
            >
              <div className={styles.aboutContent}>
                <h5>Sobre o Desenvolvedor</h5>
                <p>
                  Manoel é um Data Scientist apaixonado por transformar dados brutos em inteligência e por democratizar 
                  o acesso ao conhecimento técnico. Com experiência em modelagem preditiva e arquitetura de dados, 
                  criou esta plataforma como um recurso para a comunidade brasileira de tecnologia.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.footerBottom}>
          <p>© 2025 Guia de Estudos da Área de Dados — Desenvolvido por Manoel</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
