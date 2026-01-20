import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from "lucide-react"; 
import { SessionContext } from "../context/SessionContext";
import { CartContext } from "../context/CartContext"; // 1. Importar o Contexto do Carrinho
import { ThemeToggle } from "./ThemeToggle";

import styles from "./MyHeader.module.css";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  const { session } = useContext(SessionContext);
  const { cart } = useContext(CartContext); // 2. Pegar os dados do carrinho
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Calcular a quantidade total de itens (soma das quantidades de cada produto)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link to="/" className={styles.logoContainer}>
          <img src={logoImg} alt="TECHHOME" className={styles.logoImage} />
        </Link>

        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div className={`${styles.rightSide} ${isMenuOpen ? styles.menuOpen : ""}`}>
          
          <nav className={styles.navLinks}>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>SOBRE NÓS</Link>
          </nav>

          <div className={styles.divider}></div>

          {/* Carrinho com o Contador */}
          <Link to="/cart" className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <div className={styles.iconWrapper}>
              <ShoppingCart size={24} strokeWidth={2.5} />
              {totalItems > 0 && (
                <span className={styles.badge}>{totalItems}</span>
              )}
            </div>
            <div className={styles.actionText}>
              <span>CARRINHO</span>
              <span>DE COMPRAS</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          <Link to={session ? "/user" : "/signin"} className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
            <User size={24} strokeWidth={2.5} />
            <div className={styles.actionText}>
              {!session ? (
                <><span>ENTRE OU</span><span>CADASTRE-SE</span></>
              ) : (
                <><span>OLÁ,</span><span>{session.user.user_metadata.username.toUpperCase()}</span></>
              )}
            </div>
          </Link>

          <div className={styles.divider}></div>

          <div className={styles.themeWrapper}>
            <ThemeToggle />
            <span className={styles.themeLabel}>TEMA</span>
          </div>

        </div>
      </div>
    </header>
  );
}