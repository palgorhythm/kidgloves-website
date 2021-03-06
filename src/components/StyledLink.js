import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.darkPurple};
  font-weight: 100;
`;

export default StyledLink;
