import styles from "./page.module.css";
import CategorySidebar from "@/components/category-sidebar/category-sidebar";
import Container from "@/components/container/container";
import ProductCard from "@/components/product-card/product-card";
import ProductView from "@/components/product-view/product-view";
import { products } from "@/lib/static";
import Section from "@/components/section/section";

export default function Home() {
  return (
    <main className={styles.main}>
      <CategorySidebar />
      <Container>
        <div className={styles.home}>
          <Section
            sectionTitle="food cupboard"
            sectionSecondaryTitle="A virtual assistant collects the products from your list"
            customMargin={0}
          >
            <ProductView>
              {products?.map((pr, ind) => (
                <ProductCard key={ind} product={pr} />
              ))}
            </ProductView>
          </Section>

          <Section
            sectionTitle="food cupboard"
            sectionSecondaryTitle="A virtual assistant collects the products from your list"
          >
            <ProductView>
              {products?.map((pr, ind) => (
                <ProductCard key={ind} product={pr} />
              ))}
            </ProductView>
          </Section>
        </div>
      </Container>
    </main>
  );
}
