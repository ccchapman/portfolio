import React  from "react";
import s from "styled-components";
import tw from "tailwind.macro";

import Layout from "../components/layout";
import Www from "../components/www";

const Headline = s.h1`
  ${tw`
    mt-0
    text-5xl
  `}
`;

const Home = () => (
  <Layout>
    <Www />

    <Headline>
      Chris Chapman
    </Headline>

    <div>
      Full-Stack Web Development
    </div>
  </Layout>
);

export default Home;

