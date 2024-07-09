import Footer from "@/components/footer/footer";
import "./globals.css";
import { rubik } from "@/lib/fonts";

export const metadata = {
  title: "Borobasket",
  description: "Borobasket e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
