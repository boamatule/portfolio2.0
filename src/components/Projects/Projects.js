// import React from 'react';
import { GiRock, GiFloatingCrystal, GiCrystalBars } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { Button } from '../../global-styles';
import {
  ProjectCardWrapper,
  ProjectCardHeading,
  ProjectCardContainer,
  ProjectCardSection,
  ProjectCard,
  ProjectCardInfo,
  ProjectCardIcon,
  ProjectCardPlan,
  ProjectCardCost,
  ProjectCardLength,
  ProjectCardFeatures,
  ProjectCardFeature,
} from './ProjectsStyles';
// import  { IconContext } from 'react-icons/lib';

const { IconContext } = require('react-icons/lib');

function Projects() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProjectCardSection>
        <ProjectCardWrapper>
          <ProjectCardHeading>Our Services</ProjectCardHeading>
          <ProjectCardContainer>
            <ProjectCard to="">
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiRock />
                </ProjectCardIcon>
                <ProjectCardPlan>Starter Pack</ProjectCardPlan>
                <ProjectCardCost>$99.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$10,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Retargeting analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to="">
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiFloatingCrystal />
                </ProjectCardIcon>
                <ProjectCardPlan>Starter Pack</ProjectCardPlan>
                <ProjectCardCost>$99.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$10,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Retargeting analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to="">
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiCrystalBars />
                </ProjectCardIcon>
                <ProjectCardPlan>Starter Pack</ProjectCardPlan>
                <ProjectCardCost>$99.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$10,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Retargeting analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
              {/* <Button primary>Choose Plan</Button> */}
            </ProjectCard>
            {/* <ProjectCard to="">
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiCrystalBars />
                </ProjectCardIcon>
                <ProjectCardPlan>Starter Pack</ProjectCardPlan>
                <ProjectCardCost>$99.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$10,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Retargeting analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard> */}
          </ProjectCardContainer>
        </ProjectCardWrapper>
      </ProjectCardSection>
    </IconContext.Provider>
  );
}

export default Projects;
