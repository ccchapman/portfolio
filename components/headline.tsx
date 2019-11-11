import s from "styled-components";
import tw from "tailwind.macro";

const HeadlineWrapper = s.div`
  ${tw`
    mt-0
  `}

  ${props => props.as === "h1" && tw`
    mb-6
    text-4xl
    md:text-6xl
    tracking-wide
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
