import { Nunito } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Airbnb",
  description: "Welcome Airbnb clone to nextJS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
