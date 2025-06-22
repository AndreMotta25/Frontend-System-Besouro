import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { UserProvider } from "@/contexts/UserContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Besouro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
