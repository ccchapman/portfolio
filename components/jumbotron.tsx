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

const Jumbotron = ({
  headline,
  text,
}) => (
  <JumbotronWrapper>
    {headline && (
      <Headline>
        {headline}
      </Headline>
    )}

    {text && (
      <Text>
        {text}
      </Text>
    )}
  </JumbotronWrapper>
);

export default Jumbotron;
