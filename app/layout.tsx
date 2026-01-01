import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/components/Navigation';
import Footer from '../components/footer/footer';
import './globals.css';

export const metadata = {
  title: 'Tancelin Navez - Portfolio',
  description: 'Portfolio professionnel de Tancelin Navez - Développeur Web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="container mt-4 flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}