import styles from "./Contact.module.css";
import { MessageCircle, Clock, Globe2, ArrowUpRight, ShieldCheck } from "lucide-react";

// Importando a sua imagem real
import qrCodeImg from "../assets/imgs/QRcode.png"; 

export function Contact() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <section className={styles.header}>
        <h1>Entre em <span className={styles.neonText}>Contato</span></h1>
        <p className={styles.intro}>
          Estamos prontos para ouvir sua ideia, entender sua necessidade e transformar isso em um site profissional, simples e eficiente para o seu negócio.
        </p>
      </section>

      <div className={styles.contentGrid}>
        {/* Lado Esquerdo: WhatsApp e Informações */}
        <div className={styles.infoSide}>
          <div className={styles.contactCard}>
            <div className={styles.iconHeader}>
              <MessageCircle size={32} color="#00ff00" />
              <h3>Fale conosco pelo WhatsApp</h3>
            </div>
            <p>
              O WhatsApp é nosso principal canal de atendimento, garantindo uma comunicação ágil e prática durante todas as etapas do projeto.
            </p>
            
            <div className={styles.infoTopics}>
              <h4>Por lá, você pode:</h4>
              <ul className={styles.benefitsList}>
                <li>Solicitar um orçamento personalizado</li>
                <li>Tirar dúvidas sobre prazos e valores</li>
                <li>Conversar sobre ideias e objetivos</li>
                <li>Iniciar o desenvolvimento do seu projeto</li>
              </ul>
            </div>

            <a 
              href="https://wa.link/pvu2nr" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.waButton}
            >
              CONVERSAR NO WHATSAPP <ArrowUpRight size={20} />
            </a>
          </div>

          <div className={styles.onlineBadge}>
            <Globe2 size={20} color="#00ff00" />
            <span>Atendimento 100% online em todo o Brasil</span>
          </div>
        </div>

        {/* Lado Direito: Horários e QR Code */}
        <div className={styles.detailsSide}>
          <div className={styles.glassCard}>
            <div className={styles.detailItem}>
              <div className={styles.detailHeader}>
                <Clock size={24} color="#00ff00" />
                <h4>Horário de Atendimento</h4>
              </div>
              <p>Segunda a sexta-feira</p>
              <p className={styles.hours}>08h às 18h</p>
              <span className={styles.subText}>(Mensagens fora do horário serão respondidas no próximo período útil.)</span>
            </div>
            
            <div className={styles.qrSection}>
              <div className={styles.qrWrapper}>
                {/* Sua imagem de QR Code aplicada aqui */}
                <img src={qrCodeImg} alt="QR Code Andrade Web Studios" className={styles.qrImage} />
                <span className={styles.qrLabel}>SCAN ME</span>
              </div>
              <p className={styles.qrText}>Acesso rápido via QR Code para iniciar a conversa pelo computador.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Compromisso Final */}
      <section className={styles.commitment}>
        <div className={styles.commitmentBox}>
          <ShieldCheck size={40} color="#00ff00" />
          <h2>Compromisso com você</h2>
          <p>
            Na <strong>Andrade Web Studios</strong>, prezamos por uma comunicação clara, transparente e profissional 
            desde o primeiro contato até a entrega final. Nosso objetivo é entregar uma solução que gere valor, 
            presença digital e resultados reais para o seu negócio.
          </p>
        </div>
      </section>
    </div>
  );
}