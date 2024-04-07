import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import SideMenu from "./components/Navbar/SideMenu";
import Chatbot from "./components/Chatbot";

import toast, { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduRAAP",
  description: "Learning platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <SideMenu/>
        <Chatbot/>
        <Toaster position="top-center"
  reverseOrder={false}/>
        {children}
        </body>
    </html>
    
    </ClerkProvider>
  );
}
