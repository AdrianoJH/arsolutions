import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./routes/routes";
import { Container } from "./styles/appStyles";
const App = () => {
  return (
    <Container>
      <Header />
      <Routers />
      <Footer />
    </Container>
  );
};

export default App;
