import { useEffect, createRef } from "react";
import s from "styled-components";
import tw from "tailwind.macro";
import anime from "animejs";

const WwwWrapper = s.div`
  ${tw`
    fixed
    top-0
    left-0
    text-4xl
    md:text-6xl
    leading-none
    w-full
    whitespace-no-wrap
    select-none
    opacity-25
    text-white
  `}
`;

const WwwInner = s.div`
  transform: rotate(90deg) translateY(-100%);
  transform-origin: left;
`;

const Www = () => {
  const wwwWrapperRef = createRef();

  useEffect(() => {
    anime({
      targets: wwwWrapperRef.current,
      translateY: "-100vh",
      direction: "alternate",
      loop: true,
      duration: 5000,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <WwwWrapper ref={wwwWrapperRef}>
      <WwwInner aria-hidden={true}>
        {[...Array(30).keys()].map(() => `www `)}
      </WwwInner>
    </WwwWrapper>
  );
};

export default Www;
