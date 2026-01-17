import styles from "./About.module.css";
import { Laptop, ShieldCheck, Truck, Clock, Award } from "lucide-react";

export function About() {
  return (
    <div className={styles.container}>
      {/* Banner Principal */}
      <section className={styles.hero}>
        <h1>TechHome</h1>
        <p>Sua casa tecnológica: Inovação e performance ao seu alcance.</p>
      </section>

      {/* Diferenciais da Loja */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <Laptop size={40} />
          <h3>Curadoria Especializada</h3>
          <p>Selecionamos apenas os melhores laptops do mercado, de ultrabooks a máquinas gamers de alta performance.</p>
        </div>
        <div className={styles.featureCard}>
          <ShieldCheck size={40} />
          <h3>Segurança Total</h3>
          <p>Garantia de procedência em todos os produtos e pagamentos 100% protegidos.</p>
        </div>
        <div className={styles.featureCard}>
          <Truck size={40} />
          <h3>Entrega Ágil</h3>
          <p>Logística inteligente para garantir que sua nova ferramenta de trabalho chegue rápido até você.</p>
        </div>
      </section>

      {/* Texto Institucional */}
      <section className={styles.content}>
        <h2>Nossa Missão</h2>
        <p>
          A <strong>TechHome</strong> nasceu com o objetivo de simplificar a busca pelo computador ideal. 
          Acreditamos que a tecnologia deve ser acessível e descomplicada, por isso oferecemos uma 
          interface intuitiva onde você encontra tudo o que precisa em um só lugar.
        </p>
      </section>

      {/* Rodapé Técnico / Equipe (Menor e mais discreto) */}
      <footer className={styles.footerCredits}>
        <div className={styles.academicInfo}>
          <h4>Projeto IFRN Campus Macau</h4>
          <p>Desenvolvido para as disciplinas de PPI, FSOeSOR e PDS.</p>
        </div>
        
        <div className={styles.teamList}>
          <p><strong>Desenvolvimento:</strong> Luan Fernandes & Antônio Flávio</p>
          <p><strong>Colaboradores:</strong> Adeilton Borges, Caio Gabriel & Gabriel Fernandes</p>
        </div>

        <div className={styles.techStack}>
          <span>React</span> • <span>Supabase</span> • <span>Docker</span>
        </div>
      </footer>
    </div>
  );
}