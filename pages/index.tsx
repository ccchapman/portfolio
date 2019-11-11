import Layout from "../components/layout";
import Www from "../components/www";
import Jumbotron from "../components/jumbotron";

const Home = () => (
  <Layout>
    <Www />
    <Jumbotron
      headline="Chris Chapman"
      text="Front-End Web Developer in Vancouver, B.C."
    />
  </Layout>
);

export default Home;
