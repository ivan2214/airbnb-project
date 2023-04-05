import { Nunito } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RentModal from "./components/Modals/RentModal";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Welcome Airbnb clone to nextJS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
