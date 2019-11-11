import { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from 'styled-components';
import tw from 'tailwind.macro';
import anime from 'animejs';

const TextWrapper = s.div`
  ${tw`
    tracking-wide
  `}
`;

const Text = ({
  children,
}) => {
  const textRef = createRef();

  useEffect(() => {
    anime({
      targets: textRef.current,
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <TextWrapper ref={textRef}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
