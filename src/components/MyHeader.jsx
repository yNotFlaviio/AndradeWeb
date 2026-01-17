import { useContext } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingBasket } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { SessionContext } from "../context/SessionContext";
import { ThemeToggle } from "./ThemeToggle";

import styles from "./MyHeader.module.css";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  const { cart } = useContext(CartContext);
  const { session } = useContext(SessionContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Logo */}
        <Link to="/" className={styles.logoContainer}>
          <img src={logoImg} alt="TECHHOME" className={styles.logoImage} />
        </Link>

        {/* Lado Direito: Tudo alinhado horizontalmente */}
        <div className={styles.rightSide}>
          
          <nav className={styles.navLinks}>
            <Link to="/about">SOBRE NÓS</Link>
          </nav>

          <div className={styles.themeContainer}>
            <ThemeToggle />
          </div>

          <Link to="/cart" className={styles.cartSection}>
            <div className={styles.cartIconWrapper}>
              <ShoppingBasket size={28} />
              {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
            </div>
            <span className={styles.cartTotal}>R$ {totalPrice}</span>
          </Link>

          <div className={styles.authGroup}>
            <div className={styles.divider}></div>
            <User size={32} className={styles.userIcon} />
            <div className={styles.authText}>
              {!session ? (
                <>
                  <div className={styles.loginRow}>
                    <Link to="/signin" className={styles.link}>ENTRE</Link>
                    <span className={styles.separator}>OU</span>
                  </div>
                  <Link to="/register" className={styles.link}>
                    <strong>CADASTRE-SE</strong>
                  </Link>
                </>
              ) : (
                <Link to="/user" className={styles.link}>
                  Olá, {session.user.user_metadata.username}
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}