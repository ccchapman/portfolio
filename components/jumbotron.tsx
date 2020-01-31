import { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from 'styled-components';
import tw from 'tailwind.macro';
import anime from 'animejs';

import Headline from './headline';
import Text from './text';

const JumbotronWrapper = s.div`
  ${tw`
    bg-gray-100
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    px-4
    text-center
  `}
`;

const Wave = s.div`
  ${tw`
    mb-4
    text-4xl
  `}
`;

const Jumbotron = ({
  headline,
  text,
}) => {
  const waveRef = createRef();

  useEffect(() => {
    anime({
      targets: waveRef.current,
      rotate: [0, -10, 12, -10, 9, 0, 0],
      loop: 3,
      direction: 'alternate',
      duration: 3000,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <JumbotronWrapper>
      <Wave ref={waveRef}>
        <span role="img" aria-label="A waving hand">👋</span>
      </Wave>

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
};

Jumbotron.propTypes = {
  headline: PropTypes.string,
  text: PropTypes.string,
};

export default Jumbotron;
