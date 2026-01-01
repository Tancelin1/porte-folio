'use client';
import { Container } from 'react-bootstrap';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaLinkedin, FaFilePdf, FaGithub } from 'react-icons/fa';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.spacer}></div>
          <p className={styles.copyright}>
            © 2025 - {currentYear} Tancelin Navez. Tous droits réservés.
          </p>
          <div className={styles.iconContainer}>
            <a 
              href="mailto:tancelinnavez@outlook.fr" 
              className={styles.icon}
              title="Email"
            >
              <HiMail size={28} />
            </a>
            <a 
              href="tel:0650654735" 
              className={styles.icon}
              title="Téléphone"
            >
              <HiPhone size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tancelin-navez-037514220/?originalSubdomain=fr" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              title="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://github.com/Tancelin1/" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              title="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              title="Mon CV"
            >
              <FaFilePdf size={28} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}