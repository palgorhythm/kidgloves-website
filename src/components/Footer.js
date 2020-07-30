import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const Footer = () => (
  <FooterStyle>© {new Date().getFullYear()}, kid gloves</FooterStyle>
);

export default Footer;
