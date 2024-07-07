import Container from "../container/container";

export default function PageWrapper({ children }) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}
