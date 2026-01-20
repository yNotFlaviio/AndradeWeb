import { useContext } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react"; 
import { CartContext } from "../context/CartContext";
import { SessionContext } from "../context/SessionContext";
import { ThemeToggle } from "./ThemeToggle"; // Importando o componente funcional

import styles from "./MyHeader.module.css";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  const { session } = useContext(SessionContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Logo */}
        <Link to="/" className={styles.logoContainer}>
          <img src={logoImg} alt="TECHHOME" className={styles.logoImage} />
        </Link>

        {/* Lado Direito */}
        <div className={styles.rightSide}>
          
          <nav className={styles.navLinks}>
            <Link to="/games">LOJA DE GAMES</Link>
            <Link to="/pecas">LOJA DE PEÇAS</Link>
            <Link to="/about">SOBRE NÓS</Link>
          </nav>

          <div className={styles.divider}></div>

          {/* Carrinho */}
          <Link to="/cart" className={styles.actionItem}>
            <ShoppingCart size={24} strokeWidth={2.5} />
            <div className={styles.actionText}>
              <span>CARRINHO</span>
              <span>DE COMPRAS</span>
            </div>
          </Link>

          <div className={styles.divider}></div>

          {/* Login */}
          <Link to={session ? "/user" : "/signin"} className={styles.actionItem}>
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

          {/* TEMA (Agora usando o componente funcional) */}
          <ThemeToggle />

        </div>
      </div>
    </header>
  );
}