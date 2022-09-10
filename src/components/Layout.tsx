import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container height="100vh" bg="blue">
      <Main>{children}</Main>
      <DarkModeSwitch />
    </Container>
  );
}
