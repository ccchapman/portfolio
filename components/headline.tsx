import { createRef, useEffect } from "react";
import s from "styled-components";
import tw from "tailwind.macro";
import anime from "animejs";

const HeadlineWrapper = s.div`
  ${tw`
    mt-0
    overflow-hidden
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
}) => {
  const headlineRef = createRef<HTMLElement>();

  useEffect(() => {
    const { current } = headlineRef;
    // TODO - Each letter should come from refs, not a query
    const targets = Array.from(current.querySelectorAll("span"));

    anime.timeline({ loop: false })
      .add({
        targets,
        translateY: [-100, 0],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 750,
        delay: (el, i) => 250 + 50 * i
      });
  }, []);

  return (
    <HeadlineWrapper as={element} ref={headlineRef}>
      {children.split("").map((letter, index) =>
        <span key={index} style={{ display: "inline-block" }}>
          {letter.replace(" ", "\u00a0")}
        </span>
      )}
    </HeadlineWrapper>
  );
};

Headline.defaultProps = {
  element: "h1",
};

export default Headline;
