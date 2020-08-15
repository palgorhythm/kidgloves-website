import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: ${(props) => props.theme.darkPurple};
  font-size: 0.5em;
  text-decoration: none;
  position: absolute;
  bottom: 0px;
  right: 0px;
  @media (max-width: 768px) {
    margin: auto;
    padding: auto;
    width: 80px;
    right: calc(50% - 40px);
  }
`;

const Footer = () => (
  <FooterStyle>© {new Date().getFullYear()}, kid gloves</FooterStyle>
);

export default Footer;
