import styles from "./shop.module.css";
import { products } from "@/lib/static";
import Container from "@/components/container/container";
import CategorySidebar from "@/components/category-sidebar/category-sidebar";
import ProductCard from "@/components/product-card/product-card";
import ProductView from "@/components/product-view/product-view";

export default function ShopPage() {
  return (
    <main className={styles.main}>
      <CategorySidebar />
      <Container>
        <ProductView>
          {products?.map((pro, i) => (
            <ProductCard key={i} product={pro} />
          ))}
        </ProductView>
      </Container>
    </main>
  );
}
