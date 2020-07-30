import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  margin-top: 1rem;
`;

const Footer = () => (
  <FooterStyle>© {new Date().getFullYear()}, kid gloves</FooterStyle>
);

export default Footer;
