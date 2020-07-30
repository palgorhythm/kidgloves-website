import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from './Image';

const BodyStyle = styled.div`
  background: ${(props) => props.theme.yellow};
  padding: 1.25rem;
  margin-top: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-items: center;
  align-content: center;
`;

const BodyTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;

const Body = () => (
  <BodyStyle>
    <BodyTextArea>
      <h1>BIO</h1>
      <p>
        Hailing from South Florida, now based in LA, Kid Gloves is the dream project of an anonymous producer/songwriter. <br/>
        To him, "putting on your kid gloves" means letting go of restraint and inhibition, getting out your dreams, and dancing in the rain. <br/>
        This is a release for him as he makes a name for himself as a producer for other projects.<br/><br/>
        
        With a musical background in jazz, rock, and hip hop, KG's sound lands somewhere between The Beach Boys, Dijon, and Alex G. <br/>
        Watch out for the upcoming EP "Floor Music" early 2021.
      </p>
      <Link to='https://www.instagram.com/kidglov3s/'>instagram</Link><br/>
      <Link to='https://www.facebook.com/kidglov3s'>facebook</Link><br/>
      <Link to='https://open.spotify.com/artist/0uhS2Dm4iv3qukaycmPbNF?si=fA7H472XQxG5Glc3zXpvEA'>spotify</Link><br/>
      <Link to='https://soundcloud.com/user-177473750'>soundcloud</Link><br/>
      <Link to='https://www.youtube.com/kidgloves'>youtube</Link><br/>
    </BodyTextArea>
    <div style={{ minWidth: `30%`, maxWidth: `300px`, margin: 'auto' }}>
        <Image imageName='kidGlovesBioPic' />
      </div>
  </BodyStyle>
);

export default Body;
