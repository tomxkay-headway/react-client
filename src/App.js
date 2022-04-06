import "./styles.css";
import { Container } from "@mui/material";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Url from "./components/url";
import Tool from "./components/tool";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
        <Url />
        <Tool />
      </Container>
      <Footer />
    </>
  );
}
