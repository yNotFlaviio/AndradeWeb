import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash, Plus, Minus } from "lucide-react";

export function Cart() {
  const { cart, updateQtyCart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <div className={styles.mainPanel}>
        {/* Header Superior */}
        <div className={styles.topHeader}>
          CARRINHO DE COMPRAS | BEM-VINDO(A)
        </div>

        <div className={styles.contentLayout}>
          {/* Coluna da Esquerda: Produtos */}
          <div className={styles.productsColumn}>
            <div className={styles.columnHeader}>PRODUTOS</div>
            
            {cart.length === 0 ? (
              <p className={styles.emptyMsg}>Seu carrinho está vazio.</p>
            ) : (
              <div className={styles.itemsList}>
                {cart.map((product) => (
                  <div key={product.id} className={styles.cartItem}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div className={styles.itemInfo}>
                      <h3>{product.title}</h3>
                      <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
                    </div>
                    
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => updateQtyCart(product.id, product.quantity - 1)}
                        disabled={product.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => updateQtyCart(product.id, product.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>

                    <button onClick={() => removeFromCart(product.id)} className={styles.deleteBtn}>
                      <Trash size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {cart.length > 0 && (
              <button onClick={clearCart} className={styles.clearCartBtn}>
                ESVAZIAR CARRINHO <Trash size={16} />
              </button>
            )}
          </div>

          {/* Divisor Vertical (Só aparece no Desktop) */}
          <div className={styles.verticalDivider}></div>

          {/* Coluna da Direita: Resumo */}
          <div className={styles.summaryColumn}>
            <div className={styles.columnHeader}>VALOR TOTAL</div>
            <div className={styles.totalBox}>
              <span className={styles.totalValue}>
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
              <button className={styles.checkoutBtn}>FINALIZAR COMPRA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}