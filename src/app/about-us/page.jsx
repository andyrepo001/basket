import Image from "next/image";
import styles from "./about.module.css";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import Headers from "@/components/headers/headers";
import ab from "@/assets/ab.webp";
import Section from "@/components/section/section";
import FeatureCard from "@/components/feature-card/feature-card";
import Button from "@/components/button/button";

import f1 from "@/assets/f1.png";
import f2 from "@/assets/f2.webp";
import f3 from "@/assets/f3.png";
import f4 from "@/assets/f4.png";
import ab2 from "@/assets/ab2.webp";
import { ArrowRight } from "lucide-react";
import Container from "@/components/container/container";

const features = [
  {
    label: "24/7 customer support",
    text: "",
    image: f1,
  },
  {
    label: "free delivery",
    text: "",
    image: f2,
  },
  {
    label: "unique products",
    text: "",
    image: f3,
  },
  {
    label: "100% authentic",
    text: "",
    image: f4,
  },
];

export default function Page() {
  return (
    <PageWrapper>
      <div>
        <Section customMargin={0}>
          {/* Philosophy Card */}
          <div className={styles.philosophy_card}>
            <figure className={styles.philosophy_image_wrapper}>
              <Image src={ab} alt="" className={styles.philosophy_image} fill />
            </figure>
            <div className={styles.philosophy_text}>
              <Container>
                <Headers
                  primaryHeader="our philosophy"
                  customStyles={{ marginBottom: "1rem" }}
                />
                <p className={styles.about_text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, saepe consequatur? Mollitia beatae perspiciatis
                  accusantium deserunt nihil facere quia laboriosam architecto
                  alias? Eaque error illo reiciendis quam provident aperiam sit,
                  sint dignissimos, iusto officiis sunt voluptatibus. Nesciunt
                  saepe omnis deserunt doloremque sunt, beatae eius illo laborum
                  vel cumque molestias, quam quos atque voluptates veritatis
                  explicabo, quaerat fuga cupiditate quo alias! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sed nesciunt
                  aspernatur eligendi nulla sequi vitae? Neque ullam tempora
                  aperiam iure magnam molestias, dolor incidunt saepe dolore
                  velit suscipit illum repudiandae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nemo quos sunt laudantium fugit
                  assumenda similique atque exercitationem.
                </p>
              </Container>
            </div>
          </div>
        </Section>
        {/* Features */}
        <Section
          customStyles={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <div className={styles.features}>
              <Headers
                primaryHeader="why you'll love us"
                customStyles={{ marginBottom: "1rem" }}
              />
              <p className={styles.about_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, optio, iusto magni fuga officia nam doloremque quidem
                odio saepe voluptatibus hic aliquam. Natus vel ab, nesciunt
                adipisci repudiandae, dolores quas eligendi dolore deleniti id
                similique aliquam cumque nisi maiores? Ut sit iste voluptatibus
                quos aliquid aperiam nesciunt vitae commodi facere sint
                laboriosam molestiae rem maxime nemo eum ad quasi.
              </p>
            </div>
          </Container>
          <div className={styles.feature_cards}>
            {features?.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </Section>

        {/* Call To Action */}
        <Section>
          <div className={styles.cta}>
            <div className={styles.cta_card_wrapper}>
              <div className={styles.cta_card}>
                <Headers
                  primaryHeader="visit the shop"
                  customStyles={{ textAlign: "center", marginBottom: "1rem" }}
                />
                <p
                  className={styles.about_text}
                  style={{ textAlign: "center", marginBottom: "var(--margin)" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
                  quidem! Fugiat itaque natus quos obcaecati? Ut porro quos
                  facere est reiciendis! Sed minus perspiciatis voluptatibus eos
                  facere saepe sequi repellat.
                </p>
                <Button
                  label="here we go"
                  variant="secondary"
                  icon={ArrowRight}
                />
              </div>
            </div>

            <figure className={styles.cta_image_wrapper}>
              <Image src={ab2} alt="" fill className={styles.cta_image} />
            </figure>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}
