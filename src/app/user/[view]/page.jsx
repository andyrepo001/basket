import Button from "@/components/button/button";
import styles from "./profile.module.css";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import Address from "@/components/views/address/address";
import Orders from "@/components/views/orders/orders";
import Profile from "@/components/views/profile/profile";
import Wishlist from "@/components/views/wishlist/wishlist";
import ProfileSiebarTrigger from "@/components/profile-sidebar/profile-sidebar-trigger/profile-sidebar-trigger";
import Container from "@/components/container/container";
import NotFound from "@/app/not-found";

export default function ProfilePage({ params }) {
  const views = {
    profile: Profile,
    address: Address,
    wishlist: Wishlist,
    orders: Orders,
  };

  const CurrentView = views[params?.view];

  if (!CurrentView) return <NotFound />;

  return (
    <PageWrapper>
      <div className={styles.profile_wrapper}>
        <div>
          <ProfileSidebar />
        </div>
        <ProfileSiebarTrigger>
          <Button label="show menu" variant="secondary" />
        </ProfileSiebarTrigger>
        <div className={styles.content}>
          <div className={styles.content_main}>
            <CurrentView />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
