import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle, Info, Layout, Briefcase } from "lucide-react"; 

import styles from "./MyHeader.module.css";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link to="/" className={styles.logoContainer} onClick={() => setIsMenuOpen(false)}>
          <img src={logoImg} alt="ANDRADE WEB STUDIOS" className={styles.logoImage} />
        </Link>

        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className={`${styles.rightSide} ${isMenuOpen ? styles.menuOpen : ""}`}>
          
          <Link to="/about" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <div className={styles.iconWrapper}>
              <Info size={20} strokeWidth={2.5} />
            </div>
            <div className={styles.actionText}>
              <span>QUEM SOMOS?</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          <Link to="/services" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <div className={styles.iconWrapper}>
              <Layout size={20} strokeWidth={2.5} />
            </div>
            <div className={styles.actionText}>
              <span>SERVIÇOS</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          {/* NOVA ABA: PORTFÓLIO */}
          <Link to="/portfolio" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <div className={styles.iconWrapper}>
              <Briefcase size={20} strokeWidth={2.5} />
            </div>
            <div className={styles.actionText}>
              <span>PORTFÓLIO</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          <Link to="/contact" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <div className={styles.iconWrapper}>
              <MessageCircle size={20} strokeWidth={2.5} />
            </div>
            <div className={styles.actionText}>
              <span>CONTATO</span>
            </div>
          </Link>

        </nav>
      </div>
      
      {/* Linha Verde Neon */}
      <div className={styles.bottomLine}></div>
    </header>
  );
}