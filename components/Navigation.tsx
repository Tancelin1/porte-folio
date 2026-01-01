'use client';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Link href="/" className={styles.brand}>
          Tancelin Navez
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/presentation" className={styles.navLink}>
              Présentation
            </Link>
            <Link href="/histoire" className={styles.navLink}>
              Histoire
            </Link>
            <Link href="/projets" className={styles.navLink}>
              Projets
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </Nav>
          <div className={styles.themeToggleContainer}>
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}