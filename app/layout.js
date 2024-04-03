import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import SignInModal from "./components/Modals/SignInModal";
import SignUpModal from "./components/Modals/SignUpModal";
import SideMenu from "./components/Navbar/SideMenu";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aloo",
  description: "For hackathon",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <SignInModal/>
        <SignUpModal/>
        <SideMenu/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
