import { Nunito } from 'next/font/google';

import './globals.css';
import NavBar from './components/NavBar/NavBar';

export const metadata = {
  title: 'Airbnb',
  description: 'Welcome Airbnb clone to nextJS',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
