import styles from "./faq.module.css";
import FaqDropodown from "@/components/faq-dropdown/faq-dropdown";
import Headers from "@/components/headers/headers";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import Text from "@/components/text/text";
import Link from "next/link";

const faqs = [
  {
    question: "How to order multiple products?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "How do you deliver products?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "What is the support center number?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "Are the products authentic?",
    answer:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    question: "How many products do you have?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
];

export default function FAQPage() {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <div className={styles.header_wrapper}>
          <Headers
            primaryHeader="frequently asked questions"
            large
            customStyles={{ marginBottom: "var(--margin)" }}
          />
          <Text>
            Got a question? We got you covered! These are the questions our
            customers asked us the most. If you have further questions, please{" "}
            <Link href="/contact-us" className={styles.contact}>
              contact our support here.
            </Link>
          </Text>
        </div>
        <div className={styles.dropdown_items}>
          {faqs?.map((faq, index) => (
            <FaqDropodown key={index} faq={faq} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
