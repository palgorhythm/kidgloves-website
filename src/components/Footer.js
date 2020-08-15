import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: ${(props) => props.theme.darkPurple};
  text-decoration: none;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Footer = () => (
  <FooterStyle>© {new Date().getFullYear()}, kid gloves</FooterStyle>
);

export default Footer;
