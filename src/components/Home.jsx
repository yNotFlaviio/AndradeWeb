import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Zap, Target, Palette, Shield, ArrowRight, MessageCircle, CheckCircle2, Layout, MousePointer2, Briefcase, UserRound } from "lucide-react";

export function Home() {
  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Sites profissionais para destacar seu <span className={styles.neonText}>negócio na internet</span>
        </h1>
        <p className={styles.subtitle}>
          Criamos sites simples, rápidos e estratégicos para empresas e autônomos que querem crescer no digital.
        </p>
        <div className={styles.ctaGroup}>
          <Link to="/contact" className={styles.primaryBtn}>
            Solicitar orçamento <ArrowRight size={20} />
          </Link>
          <a href="https://wa.link/pvu2nr" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* 2. Benefícios Rápidos */}
      <section className={styles.benefits}>
        <div className={styles.benefitCard}>
          <Zap className={styles.icon} />
          <h3>Sites Rápidos</h3>
          <p>Otimização de performance para carregamento instantâneo.</p>
        </div>
        <div className={styles.benefitCard}>
          <Target className={styles.icon} />
          <h3>Foco em Vendas</h3>
          <p>Estrutura focada em converter visitantes em clientes.</p>
        </div>
        <div className={styles.benefitCard}>
          <Palette className={styles.icon} />
          <h3>Design Premium</h3>
          <p>Visual moderno que transmite autoridade e confiança.</p>
        </div>
      </section>

      {/* 3. O que fazemos (Transformado em Grid Visual) */}
      <section className={styles.miniServices}>
        <h2 className={styles.sectionTitle}>O que podemos <span className={styles.neonText}>fazer por você</span></h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceBox}>
            <Layout size={30} color="#00ff00" />
            <h4>Sites Institucionais</h4>
          </div>
          <div className={styles.serviceBox}>
            <MousePointer2 size={30} color="#00ff00" />
            <h4>Landing Pages</h4>
          </div>
          <div className={styles.serviceBox}>
            <Briefcase size={30} color="#00ff00" />
            <h4>Portfólios</h4>
          </div>
          <div className={styles.serviceBox}>
            <UserRound size={30} color="#00ff00" />
            <h4>Para Autônomos</h4>
          </div>
        </div>
        <Link to="/services" className={styles.textLink}>
          Explorar todos os serviços <ArrowRight size={18} />
        </Link>
      </section>

      {/* 4. Por que escolher (Destaque para Confiança) */}
      <section className={styles.whyUs}>
        <div className={styles.whyWrapper}>
          <div className={styles.whyText}>
            <h2>Por que a <span className={styles.neonText}>Andrade Web Studios?</span></h2>
            <p>Cada projeto é desenvolvido de forma personalizada, unindo estética e estratégia para resultados reais.</p>
          </div>
          <div className={styles.topicsGrid}>
            <div className={styles.topicItem}>
              <CheckCircle2 color="#00ff00" size={24} />
              <div>
                <strong>Atendimento Direto</strong>
                <p>Fale direto com quem desenvolve seu site.</p>
              </div>
            </div>
            <div className={styles.topicItem}>
              <CheckCircle2 color="#00ff00" size={24} />
              <div>
                <strong>Projeto Personalizado</strong>
                <p>Nada de templates prontos. Tudo exclusivo.</p>
              </div>
            </div>
            <div className={styles.topicItem}>
              <CheckCircle2 color="#00ff00" size={24} />
              <div>
                <strong>Entrega Objetiva</strong>
                <p>Processo claro, sem burocracia e com prazos reais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chamada Final (CTA de Alto Impacto) */}
      <section className={styles.finalCta}>
        <div className={styles.ctaBox}>
          <h2>Pronto para levar seu negócio para o digital?</h2>
          <p>Não deixe sua marca invisível na internet. Vamos criar algo incrível juntos.</p>
          <Link to="/contact" className={styles.glowBtn}>
            ENTRAR EM CONTATO AGORA
          </Link>
        </div>
      </section>
    </div>
  );
}