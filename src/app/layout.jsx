import "./globals.css";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MobileNav from "@/components/navbar/mobile-nav/mobile-nav";
import CategorySidebar from "@/components/category-sidebar/category-sidebar";

export const metadata = {
  title: "Borobasket",
  description: "Borobasket e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <MobileNav />
        <div className="category">
          <CategorySidebar />
        </div>
      </body>
    </html>
  );
}
