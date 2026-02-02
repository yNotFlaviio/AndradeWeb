import styles from "./About.module.css";
import { Monitor, ShieldCheck, Zap } from "lucide-react";

export function About() {
  return (
    <div className={styles.container}>
      {/* Banner Principal */}
      <section className={styles.hero}>
        <h1>Andrade <span className={styles.neonText}>Web Studios</span></h1>
        
        <p className={styles.tagline}>Sua presença digital começa aqui.</p>

        <div className={styles.description}>
          <p>
            Somos especializados na criação de sites profissionais para empresas e autônomos, 
            com foco em design moderno, alto desempenho e facilidade de contato com o cliente final. 
            Desenvolvemos soluções digitais pensadas para transmitir credibilidade, fortalecer marcas 
            e transformar visitantes em oportunidades reais de negócio.
          </p>

          <p>
            Criada no final de 2025, a <strong>Andrade Web Studios</strong> nasceu com o objetivo 
            de simplificar a presença digital de negócios que desejam crescer e se destacar na internet, 
            oferecendo sites claros, funcionais e estrategicamente planejados para cada necessidade.
          </p>

          <p className={styles.highlight}>
            A marca é idealizada e desenvolvida por <strong>Antônio Flávio</strong>, profissional da área de tecnologia, 
            que atua diretamente em todas as etapas do projeto — do planejamento ao desenvolvimento final — 
            garantindo atenção aos detalhes, comunicação transparente e soluções alinhadas aos objetivos de cada cliente.
          </p>

          <p>
            Nosso compromisso é entregar sites modernos, eficientes e acessíveis, ajudando empresas 
            e profissionais a se posicionarem melhor no ambiente digital e alcançarem novos clientes 
            de forma profissional e segura.
          </p>
        </div>
      </section>

      {/* Diferenciais - Cards com Animação */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Monitor size={32} />
          </div>
          <h3>Soluções Inteligentes</h3>
          <p>Sites institucionais modernos, responsivos e objetivos, pensados para todos os dispositivos.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <ShieldCheck size={32} />
          </div>
          <h3>Confiabilidade</h3>
          <p>Sites rápidos, seguros e estáveis, oferecendo uma experiência profissional e robusta.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Zap size={32} />
          </div>
          <h3>Foco em Resultados</h3>
          <p>Projetos criados para gerar credibilidade e contatos, com integração direta ao WhatsApp.</p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className={styles.content}>
        <h2>Nossa <span className={styles.neonText}>Missão</span></h2>
        <p>
          Facilitar o acesso ao digital por meio do desenvolvimento de sites simples, eficientes e estratégicos, 
          ajudando empresas e profissionais a fortalecerem sua presença online, transmitirem credibilidade 
          e alcançarem novos clientes de forma clara, moderna e funcional.
        </p>
      </section>

      {/* Rodapé */}
      <footer className={styles.footerCredits}>
        <div className={styles.academicInfo}>
          <h4>© 2025 – Andrade Web Studios</h4>
        </div>
        
        <div className={styles.techStack}>
          <span>React</span> • <span>Vercel</span>
        </div>
      </footer>
    </div>
  );
}