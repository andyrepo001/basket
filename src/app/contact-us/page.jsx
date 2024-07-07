import styles from "./contact-us.module.css";
import { Building, Mail, Phone, SendHorizonal } from "lucide-react";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import DataCell from "@/components/data-cell/data-cell";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <DataCell
            link
            dataName="phone"
            href="tel:+8801873228724"
            dataValue="+8801873228724"
            icon={Phone}
          />
          <DataCell
            link
            dataName="email"
            href="mailto:admin@mail.com"
            dataValue="admin@mail.com"
            icon={Mail}
          />
          <DataCell
            dataName="Dhaka office"
            dataValue="nala drive, dhaka 1216"
            icon={Building}
          />
          <DataCell
            dataName="chittagong office"
            dataValue="marine drive, ctg 2345"
            icon={Building}
          />
        </div>

        <div>
          <form action="" className={styles.form}>
            <Input
              placeholder="Enter full name"
              label="Name"
              required
              type=""
            />
            <Input
              placeholder="Enter valid email address"
              label="email"
              required
              type="email"
            />
            <Input
              placeholder="Enter phone number"
              label="phone"
              required
              type=""
            />
            <Input
              placeholder="Enter your message"
              label="message"
              required
              type="textarea"
            />
            <Button
              label="send message"
              icon={SendHorizonal}
              variant="secondary"
            />
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
