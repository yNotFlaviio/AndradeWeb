import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      {theme === 'light' ? (
        <SunIcon size={24} strokeWidth={2.5} />
      ) : (
        <MoonIcon size={24} strokeWidth={2.5} />
      )}
      <div className={styles.themeText}>
        <span>TEMA</span>
      </div>
    </button>
  );
}