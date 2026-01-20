import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from "lucide-react"; 
import { SessionContext } from "../context/SessionContext";
import { ThemeToggle } from "./ThemeToggle";

import styles from "./MyHeader.module.css";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  const { session } = useContext(SessionContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Logo */}
        <Link to="/" className={styles.logoContainer}>
          <img src={logoImg} alt="TECHHOME" className={styles.logoImage} />
        </Link>

        {/* Botão Hambúrguer (Só visível no Mobile) */}
        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Lado Direito / Menu */}
        <div className={`${styles.rightSide} ${isMenuOpen ? styles.menuOpen : ""}`}>
          
          <nav className={styles.navLinks}>
            <Link to="/games" onClick={() => setIsMenuOpen(false)}>LOJA DE GAMES</Link>
            <Link to="/pecas" onClick={() => setIsMenuOpen(false)}>LOJA DE PEÇAS</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>SOBRE NÓS</Link>
          </nav>

          <div className={styles.divider}></div>

          {/* Carrinho */}
          <Link to="/cart" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <ShoppingCart size={24} strokeWidth={2.5} />
            <div className={styles.actionText}>
              <span>CARRINHO</span>
              <span>DE COMPRAS</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          {/* Login */}
          <Link to={session ? "/user" : "/signin"} className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <User size={24} strokeWidth={2.5} />
            <div className={styles.actionText}>
              {!session ? (
                <>
                  <span>ENTRE OU</span>
                  <span>CADASTRE-SE</span>
                </>
              ) : (
                <>
                  <span>OLÁ,</span>
                  <span>{session.user.user_metadata.username.toUpperCase()}</span>
                </>
              )}
            </div>
          </Link>

          <div className={styles.divider}></div>

          {/* TEMA */}
          <div className={styles.themeWrapper}>
            <ThemeToggle />
            <span className={styles.themeLabel}>TEMA</span>
          </div>

        </div>
      </div>
    </header>
  );
}