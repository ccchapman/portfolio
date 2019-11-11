import s from "styled-components";
import tw from "tailwind.macro";

const TextWrapper = s.div`
  ${tw`
    tracking-wide
  `}
`;

const Text = ({
  children,
}) => (
  <TextWrapper>
    {children}
  </TextWrapper>
);

export default Text;
