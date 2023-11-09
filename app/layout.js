import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout"; // Adjust the path if necessary
import { AuthProvider } from "../contexts/AuthContext"; // Adjust the path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Macaroons Demo",
  description: "A Next.js + FastApi demo application for macaroon tokens", // You can update this as needed
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
