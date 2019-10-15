import React, { useEffect } from "react";
import s from "styled-components";
import tw from "tailwind.macro";
import anime from "animejs";
const WwwWrapper = s.div`
  ${tw`
    absolute
    top-0
    left-0
    font-mono
    text-6xl
    leading-none
    w-full
    whitespace-no-wrap
    select-none
  `}
`;

const Www = () => {
  const wwwWrapperRef = React.createRef();

  useEffect(() => {
    anime({
      targets: wwwWrapperRef.current,
      translateX: "-100vw",
      direction: "alternate",
      loop: true,
      duration: 5000,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <WwwWrapper ref={wwwWrapperRef}>
      www www www www www www www www www www www www www www www www www www www www www www www www
    </WwwWrapper>
  );
};

export default Www;
