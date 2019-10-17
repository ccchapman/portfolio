import React from "react";
import s from "styled-components";
import tw from "tailwind.macro";

import Headline from "./headline";
import Text from "./text";

const JumbotronWrapper = s.div`
  ${tw`
    bg-purple-500
    text-white
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
  `}
`;

const Jumbotron = () => (
  <JumbotronWrapper>
    <Headline>
      Chris Chapman
    </Headline>

    <Text>
      Full-Stack Web Development
    </Text>
  </JumbotronWrapper>
);

export default Jumbotron;
