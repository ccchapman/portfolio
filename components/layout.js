import React  from "react";
import s from "styled-components";
import tw from "tailwind.macro";

const LayoutWrapper = s.div`
  ${tw`
    antialiased
  `}
`;

const Layout = ({
  children
}) => (
  <LayoutWrapper>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');
    `}</style>

    {children}
  </LayoutWrapper>
);

export default Layout;

