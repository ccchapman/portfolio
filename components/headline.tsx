import React from "react";
import s from "styled-components";
import tw from "tailwind.macro";

const HeadlineWrapper = s.div`
  ${tw`
    mt-0
  `}

  ${props => props.as === "h1" && tw`
    text-4xl
    md:text-6xl
  `}
`;

const Headline = ({
  children,
  element,
}) => (
  <HeadlineWrapper as={element}>
    {children}
  </HeadlineWrapper>
);

Headline.defaultProps = {
  element: "h1",
};

export default Headline;
