import Section from "../section/section";

export default function UserDashboardWrapper({
  customStyles,
  title,
  children,
}) {
  return (
    <Section
      customMargin={0}
      customStyles={{
        ...customStyles,
        borderRadius: "var(--radius)",
        backgroundColor: "var(--background)",
        padding: "var(--padding)",
      }}
      sectionTitle={title}
    >
      {children}
    </Section>
  );
}
