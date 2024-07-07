import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";
import styles from "./address.module.css";
import Section from "@/components/section/section";
import Button from "@/components/button/button";
import { Plus } from "lucide-react";
import AddressCard from "./address-card/address-card";

export default function Address() {
  return (
    <UserDashboardWrapper title="address book">
      <div>
        <Button
          label="add new address"
          variant="secondary"
          secondaryIcon={Plus}
        />
        <div className={styles.addresses}>
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </UserDashboardWrapper>
  );
}
