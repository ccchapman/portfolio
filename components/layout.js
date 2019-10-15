import React  from "react";
import s from "styled-components";
import tw from "tailwind.macro";

const LayoutWrapper = s.div`
  ${tw`
    antialiased
    bg-purple-500
    min-h-screen
  `}
`;

const Layout = ({
  children
}) => (
  <LayoutWrapper>
    <style jsx global>{`
      @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
      @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');
    `}</style>

    {children}
  </LayoutWrapper>
);

export default Layout;

