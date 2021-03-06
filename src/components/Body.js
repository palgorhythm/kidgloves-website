import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from './Image';
import Footer from './Footer'

const BodyStyle = styled.div`
  background: ${(props) => props.theme.white};
  padding: 2%;
  margin: 2%;
  border-radius: 1rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  justify-items: center;
  align-content: center;
  position: relative;
`;

const BodyTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;

const StyledBio = styled.p`
  color: ${(props) => props.theme.black};
`

const StyledImage = styled.div`
  min-width: 25vw;
  max-width: 100%;
  @media (max-width: 768px) {
    min-width: 60vw;
  }
  margin: auto;
`

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.black};
`

const linkPurple = '#7d90f5'

const Body = () => (
  <BodyStyle>
    <BodyTextArea>
      {/* <StyledHeader>BIO</StyledHeader> */}
      <StyledBio>
        Hailing from South Florida, now based in LA, Kid Gloves is the dream project of an anonymous producer/songwriter. <br/>
        To him, "putting on your kid gloves" means letting go of restraint and inhibition, getting out your dreams, and dancing in the rain. <br/>
        This is a release for him as he makes a name for himself as a producer for other projects.<br/><br/>
        
        With a musical background in jazz, rock, and hip hop, KG's sound lands somewhere between The Beach Boys, Dijon, and Alex G. <br/>
        Watch out for the upcoming EP "Floor Music" early 2021.
      </StyledBio>
      <br/>
      <div>
        <Link style={{color: linkPurple}} to='https://www.instagram.com/kidglov3s/'>instagram</Link><br/><br/>
        <Link style={{color: linkPurple}} to='https://www.facebook.com/kidglov3s'>facebook</Link><br/><br/>
        <Link style={{color: linkPurple}} to='https://open.spotify.com/artist/0uhS2Dm4iv3qukaycmPbNF?si=fA7H472XQxG5Glc3zXpvEA'>spotify</Link><br/><br/>
        <Link style={{color: linkPurple}} to='https://soundcloud.com/user-177473750'>soundcloud</Link><br/><br/>
        <Link style={{color: linkPurple}} to='https://www.youtube.com/kidgloves'>youtube</Link><br/><br/>
      </div>
    </BodyTextArea>
    <StyledImage>
      <Image imageName='kidGlovesBioPic' />
    </StyledImage>
    <Footer></Footer>
  </BodyStyle>
);

export default Body;
