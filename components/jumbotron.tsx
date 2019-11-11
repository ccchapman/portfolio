import PropTypes from 'prop-types';
import s from 'styled-components';
import tw from 'tailwind.macro';

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

Jumbotron.propTypes = {
  headline: PropTypes.string,
  text: PropTypes.string,
};

export default Jumbotron;
