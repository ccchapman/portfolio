import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import s from 'styled-components';
import tw from 'tailwind.macro';

const LayoutWrapper = s.div`
  ${tw`
    antialiased
    font-sans
    text-gray-700
  `}
`;

const Layout = ({
  children,
}) => (
  <LayoutWrapper>
    <Helmet>
      <title>
        Chris Chapman&apos;s Portfolio
      </title>
    </Helmet>

    <style>
      {`
      @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
      @import url('https://fonts.googleapis.com/css?family=Poppins:400,700,900|Fira+Code&display=swap');
    `}
    </style>

    {children}
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
