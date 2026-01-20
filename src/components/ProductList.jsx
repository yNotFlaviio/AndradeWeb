import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "./Product";
import styles from "./ProductList.module.css";

export function ProductList() {
  const { products, loading, error } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  function handleSearch() {
    const query = searchInput.current.value.toLowerCase();
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      )
    );
  }

  function handleClear() {
    if (searchInput.current) {
      searchInput.current.value = "";
      setFilteredProducts(products);
    }
  }

  return (
    <div className={styles.container}>
      {/* Barra de Busca Estilo Pílula */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            ref={searchInput}
            type="text"
            placeholder="BUSCAR PRODUTOS..."
            className={styles.searchInput}
            onChange={handleSearch}
          />
          <button className={styles.searchButton} onClick={handleClear}>
            LIMPAR
          </button>
        </div>
      </div>

      {/* Grid de Produtos - 4 por linha */}
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {loading && <p className={styles.status}>Carregando produtos...</p>}
      {error && <p className={styles.status}>❌ {error}</p>}
    </div>
  );
}