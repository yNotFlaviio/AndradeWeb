import { useContext, useState, useEffect } from "react";
import styles from "./User.module.css";
import { SessionContext } from "../context/SessionContext";
import { CartContext } from "../context/CartContext";
import { supabase } from "../utils/supabase";
import { LogOut, PackagePlus, Settings, User as UserIcon, Trash2, Edit } from "lucide-react";

export function User() {
  const { session, handleSignOut } = useContext(SessionContext);
  const { products, loading, error, refreshProducts, refreshCart } = useContext(CartContext);

  const [adminProducts, setAdminProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ title: "", description: "", price: "", thumbnail: "" });

  const isAdmin = session?.user?.user_metadata?.admin;
  const username = session?.user?.user_metadata?.username || "Usuário";

  async function fetchAdminProducts() {
    const { data } = await supabase.from("product").select().eq("is_deleted", false).order("title", { ascending: true });
    setAdminProducts(data || []);
  }

  useEffect(() => {
    if (isAdmin) fetchAdminProducts();
  }, [isAdmin]);

  async function handleDelete(id) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      await supabase.from("product").update({ is_deleted: true }).eq("id", id);
      await refreshProducts();
      if (isAdmin) await fetchAdminProducts();
    }
  }

  async function handleUpdate(id) {
    await supabase.from("product").update({
      title: editingProduct.title,
      price: parseFloat(editingProduct.price),
      thumbnail: editingProduct.thumbnail,
    }).eq("id", id);
    setEditingProduct(null);
    await refreshProducts();
    if (isAdmin) await fetchAdminProducts();
  }

  async function handleInsert() {
    await supabase.from("product").insert({
      title: newProduct.title,
      description: newProduct.description,
      price: parseFloat(newProduct.price),
      thumbnail: newProduct.thumbnail,
      is_deleted: false,
    });
    setNewProduct({ title: "", description: "", price: "", thumbnail: "" });
    await refreshProducts();
    if (isAdmin) await fetchAdminProducts();
  }

  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.cardPanel}>
           <div className={styles.topHeader}>ACESSO NEGADO</div>
           <p style={{color: 'white', textAlign: 'center'}}>Você precisa estar logado para ver esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.layoutWrapper} ${!isAdmin ? styles.centerUser : ""}`}>
        
        {/* PAINEL 1: PERFIL */}
        <div className={styles.cardPanel}>
          <div className={styles.topHeader}>BEM-VINDO(A), {username.toUpperCase()}</div>
          
          <div className={styles.userInfoBox}>
            <div className={styles.userAvatar}>
               <UserIcon size={60} color="#8c52ff" />
            </div>
            <p><strong>E-mail:</strong> {session.user.email}</p>
            <p><strong>Status:</strong> {isAdmin ? "Administrador" : "Cliente"}</p>
            <div className={styles.idText}>
              <strong>ID:</strong> <span>{session.user.id}</span>
            </div>
          </div>

          <button className={styles.signOutBtn} onClick={handleSignOut}>
            SAIR DA CONTA <LogOut size={22} />
          </button>
        </div>

        {/* PAINEL 2: ADMIN */}
        {isAdmin && (
          <div className={styles.cardPanel}>
            <div className={styles.topHeader}>PAINEL ADMINISTRADOR</div>
            
            <div className={styles.adminScrollArea}>
              <h3 className={styles.subTitle}><PackagePlus size={26}/> Inserir Produto</h3>
              <div className={styles.insertForm}>
                <input type="text" placeholder="Título" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
                <input type="text" placeholder="Descrição" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                <input type="number" placeholder="Preço" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                <input type="text" placeholder="URL da Imagem" value={newProduct.thumbnail} onChange={(e) => setNewProduct({ ...newProduct, thumbnail: e.target.value })} />
                <button onClick={handleInsert} className={styles.addBtn}>ADICIONAR PRODUTO</button>
              </div>

              <h3 className={styles.subTitle}><Settings size={26}/> Gerenciar Produtos</h3>
              <div className={styles.productList}>
                {adminProducts.map((product) => (
                  <div key={product.id} className={styles.productItem}>
                    <div className={styles.productInfoGroup}>
                      <div className={styles.miniThumb}>
                        <img src={product.thumbnail} alt={product.title} />
                      </div>
                      <span className={styles.productTitleText}>{product.title}</span>
                    </div>
                    <div className={styles.actions}>
                      <button onClick={() => setEditingProduct(product)} className={styles.editIcon}><Edit size={22}/></button>
                      <button onClick={() => handleDelete(product.id)} className={styles.delIcon}><Trash2 size={22}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL DE EDIÇÃO */}
      {editingProduct && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <div className={styles.topHeader}>EDITAR PRODUTO</div>
            <div className={styles.modalContent}>
               <div className={styles.modalThumbPreview}>
                  <img src={editingProduct.thumbnail} alt="Preview" />
               </div>
               <div className={styles.modalInputs}>
                  <div className={styles.inputGroup}>
                    <label>Título</label>
                    <input type="text" value={editingProduct.title} onChange={(e) => setEditingProduct({...editingProduct, title: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Preço (R$)</label>
                    <input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>URL da Imagem</label>
                    <input type="text" value={editingProduct.thumbnail} onChange={(e) => setEditingProduct({...editingProduct, thumbnail: e.target.value})} />
                  </div>
               </div>
            </div>
            <div className={styles.modalButtons}>
              <button onClick={() => handleUpdate(editingProduct.id)} className={styles.saveBtn}>SALVAR</button>
              <button onClick={() => setEditingProduct(null)} className={styles.cancelBtn}>CANCELAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}