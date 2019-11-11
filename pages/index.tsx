import Layout from "../components/layout";
import Www from "../components/www";
import Jumbotron from "../components/jumbotron";

const Home = () => (
  <Layout>
    <Www />
    <Jumbotron
      headline="Chris Chapman"
      text="Full-stack Web Development"
    />
  </Layout>
);

export default Home;

