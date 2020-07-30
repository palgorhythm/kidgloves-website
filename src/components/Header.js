import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import Image from './Image';

const HeaderStyle = styled.header`
  background: ${(props) => props.theme.lightPurple};
  font-weight: 100;
  margin: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1>
      <StyledLink to='/'>{siteTitle}</StyledLink>
    </h1>
    <div style={{ height: `80px`, width: `80px`, margin: `auto 0px`, paddingLeft: '10px' }}>
      <Image imageName='heartsPic' />
    </div>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
