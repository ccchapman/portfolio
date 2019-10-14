import React from "react";
import s from "styled-components";
import tw from "tailwind.macro";

const Wrapper = s.div`
  ${tw`
    bg-red-500
  `}
`;

const Home = () => (
  <Wrapper>
    Home
  </Wrapper>
);

export default Home;
