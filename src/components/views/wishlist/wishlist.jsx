import ProductView from "@/components/product-view/product-view";
import styles from "./wishlist.module.css";
import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";
import { products } from "@/lib/static";
import ProductCard from "@/components/product-card/product-card";

export default function Wishlist() {
  return (
    <UserDashboardWrapper title="wishlist items">
      <ProductView>
        {products?.map((pro, index) => (
          <ProductCard key={index} product={pro} />
        ))}
      </ProductView>
    </UserDashboardWrapper>
  );
}
