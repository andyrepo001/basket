import {
  Facebook,
  Instagram,
  SendHorizonal,
  Twitter,
  Youtube,
} from "lucide-react";
import Container from "../container/container";
import Headers from "../headers/headers";
import InputButton from "../input-with-button/input-with-button";
import styles from "./footer.module.css";
import Icon from "../icon/icon";
import Link from "next/link";
import FooterLinkGroup from "./footer-link-group/footer-link-group";
import Text from "../text/text";

export default function Footer() {
  const footerLinks = [
    {
      label: "Top categories",
      links: [
        {
          href: "",
          label: "clothing",
        },
        {
          href: "",
          label: "grocery",
        },
        {
          href: "",
          label: "bakery",
        },
        {
          href: "",
          label: "daily needs",
        },
      ],
    },
    {
      label: "Userful Links",
      links: [
        {
          href: "/user/profile",
          label: "profile",
        },
        {
          href: "/user/orders",
          label: "orders",
        },
        {
          href: "/about-us",
          label: "about us",
        },
        {
          href: "/faq",
          label: "frequently asked questions",
        },
      ],
    },
    {
      label: "feedback",
      links: [
        {
          href: "/contact-us",
          label: "leave a feedback",
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <div className={styles.footer_links}>
            {/* Group */}
            <div>
              <Headers
                primaryHeader="about us"
                customStyles={{ marginBottom: "var(--margin)" }}
              />
              <Text style={{ lineHeight: "1.3" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                incidunt laborum aliquid aliquam ea, vero quidem sequi
                assumenda? Officiis incidunt provident et dolorum repellat vero
                laudantium exercitationem dignissimos, qui magnam, sint atque ex
                velit voluptatum recusandae id tenetur. Mollitia, sed?
              </Text>
            </div>

            {footerLinks?.map((link, index) => (
              <FooterLinkGroup key={index} link={link} />
            ))}
          </div>
          <div className={styles.connect}>
            <div>
              <Headers primaryHeader="follow us" />
              <div className={styles.socials}>
                <Link href="">
                  <Icon size={20} icon={Twitter} />
                </Link>
                <Link href="">
                  <Icon size={20} icon={Facebook} />
                </Link>
                <Link href="">
                  <Icon size={20} icon={Instagram} />
                </Link>
              </div>
            </div>
            <div>
              <Headers primaryHeader="subscribe to newsletter" />
              <InputButton
                buttonLabel="subscribe"
                buttonIcon={SendHorizonal}
                placeholder="enter your email address"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
