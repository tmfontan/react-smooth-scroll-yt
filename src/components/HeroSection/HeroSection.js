import React from 'react'
import Video from '../../videos/Sequence 01.mp4'
import { HeroSectionContainer, HeroSectionBackground, VideoBackground, HeroSectionContent, HeroSectionH1, HeroSectionH2, HeroSectionParagraph, HeroSectionButtonWrapper, Button } from './HeroElements';

const HeroSection = () => {
    return (
      <HeroSectionContainer id="home">
        <HeroSectionBackground>
          <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
        </HeroSectionBackground>
        <HeroSectionContent>
          <HeroSectionH1>
            Kisatchie-Delta
          </HeroSectionH1>
          <HeroSectionH2>
            Regional Planning & Development District
          </HeroSectionH2>
          <HeroSectionParagraph>
            Connect to Resources. Develop Your Business. Grow Your Community.
          </HeroSectionParagraph>
          <HeroSectionButtonWrapper>
            <Button to='signup' />
          </HeroSectionButtonWrapper>
        </HeroSectionContent>
      </HeroSectionContainer>
    );
};

export default HeroSection;
