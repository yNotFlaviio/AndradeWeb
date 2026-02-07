import { ExternalLink, FolderCode, Terminal } from "lucide-react";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  const projects = [
    {
      name: "TechHome",
      description: "A TechHome nasceu com o objetivo de simplificar a busca pelo computador ideal. Acreditamos que a tecnologia deve ser acessível e descomplicada, oferecendo uma interface intuitiva.",
      link: "https://techhomewebsite.vercel.app",
      tags: ["React", "E-commerce", "UX/UI"]
    },
    {
      name: "Oficina MotorTech",
      description: "Combinamos diagnósticos computadorizados de última geração com a experiência de mecânicos apaixonados por performance. Um projeto focado em confiança e robustez.",
      link: "https://motortech.vercel.app",
      tags: ["Landing Page", "Business", "Modern Design"]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          
          <header className={styles.header}>
            <div className={styles.preTitle}>
              <Terminal size={16} />
              <span>Nossas Produções</span>
            </div>
            <h1 className={styles.title}>Projetos em <span>Destaque</span></h1>
            <p className={styles.subtitle}>
              Transformamos ideias complexas em experiências digitais impecáveis. 
              Explore o padrão de excelência da Andrade Web Studios.
            </p>
          </header>

          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <FolderCode size={32} className={styles.folderIcon} />
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.externalLink}>
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tagCloud}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className={styles.visitButton}>
                  Visualizar Projeto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.portfolioFooter}>
        <p>Projeto conceitual desenvolvido para fins de portfólio. Desenvolvido por <strong>Andrade Web Studios</strong></p>
      </footer>
    </div>
  );
}