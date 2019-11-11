import s from "styled-components";
import tw from "tailwind.macro";

const TextWrapper = s.div`
  ${tw`
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
