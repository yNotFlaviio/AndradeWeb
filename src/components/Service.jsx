import styles from "./Service.module.css";
import { Globe, Target, Briefcase, Store, Check, X, MessageCircle, ArrowRight, Cpu } from "lucide-react";

export function Service() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho da Página */}
      <section className={styles.headerSection}>
        <h1>Nossos <span className={styles.neonText}>Serviços</span></h1>
        <p className={styles.tagline}>Soluções digitais simples, eficientes e estratégicas.</p>
        <p className={styles.introText}>
          Na Andrade Web Studios, desenvolvemos sites focados em presença digital, desempenho e facilidade de contato.
          Ideal para quem quer se posicionar na internet sem complicação.
        </p>
      </section>

      {/* Grid de Serviços Principais */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <Globe className={styles.icon} size={40} />
          <h3>Site Institucional</h3>
          <p>Ideal para empresas que precisam de credibilidade online.</p>
          <ul>
            <li><Check size={16} /> Design moderno</li>
            <li><Check size={16} /> Layout responsivo</li>
            <li><Check size={16} /> Páginas essenciais</li>
            <li><Check size={16} /> Botão WhatsApp</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <Target className={styles.icon} size={40} />
          <h3>Landing Page</h3>
          <p>Páginas focadas em conversão e resultados rápidos.</p>
          <ul>
            <li><Check size={16} /> Campanhas e anúncios</li>
            <li><Check size={16} /> Captação de leads</li>
            <li><Check size={16} /> CTAs estratégicos</li>
            <li><Check size={16} /> Carregamento veloz</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <Briefcase className={styles.icon} size={40} />
          <h3>Portfólio Profissional</h3>
          <p>Mostre quem você é e o seu trabalho para o mundo.</p>
          <ul>
            <li><Check size={16} /> Apresentação profissional</li>
            <li><Check size={16} /> Exibição de projetos</li>
            <li><Check size={16} /> Foco em autônomos</li>
            <li><Check size={16} /> Visual personalizado</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <Store className={styles.icon} size={40} />
          <h3>Pequenos Negócios</h3>
          <p>Soluções sob medida para quem está começando agora.</p>
          <ul>
            <li><Check size={16} /> Lojas locais</li>
            <li><Check size={16} /> Fácil navegação</li>
            <li><Check size={16} /> Foco em visibilidade</li>
            <li><Check size={16} /> Simples e funcional</li>
          </ul>
        </div>
      </section>

      {/* Seção de Tecnologia e Transparência */}
      <section className={styles.techSection}>
        <div className={styles.techBox}>
          <h3><Cpu color="#00ff00" /> Tecnologia de Ponta</h3>
          <p>Trabalhamos com <strong>React</strong> para interfaces rápidas e <strong>Vercel</strong> para hospedagem estável.</p>
        </div>

        <div className={styles.checkListSection}>
          <div className={styles.doList}>
            <h4>O que fazemos</h4>
            <ul>
              <li><Check color="#00ff00" /> Sites institucionais</li>
              <li><Check color="#00ff00" /> Landing pages</li>
              <li><Check color="#00ff00" /> Portfólios profissionais</li>
              <li><Check color="#00ff00" /> Design responsivo</li>
              <li><Check color="#00ff00" /> Integração com WhatsApp</li>
            </ul>
          </div>
          <div className={styles.dontList}>
            <h4>O que não fazemos</h4>
            <ul>
              <li><X color="#ff4d4d" /> Sistemas com login</li>
              <li><X color="#ff4d4d" /> Área administrativa</li>
              <li><X color="#ff4d4d" /> Banco de dados</li>
              <li><X color="#ff4d4d" /> E-commerce completo</li>
            </ul>
          </div>
        </div>
        <p className={styles.disclaimer}>
          *Focamos em sites de alta performance e visual estratégico. Sistemas complexos requerem outra estrutura.
        </p>
      </section>

      {/* CTA Final - Botões Corrigidos */}
      <section className={styles.ctaFinal}>
        <h2>Pronto para começar?</h2>
        <p>Se você precisa de um site profissional, rápido e direto ao ponto, a Andrade Web Studios pode te ajudar.</p>
        <div className={styles.buttonGroup}>
          <a href="/contact" className={styles.primaryBtn}>
            Solicitar Orçamento <ArrowRight size={20} />
          </a>
          <a 
            href="https://wa.link/pvu2nr" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.whatsappBtn}
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}