import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectCardSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #4b59f7; */
  background: #fff;
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectCardHeading = styled.h1`
  /* color: #fff; */
  color: purple;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProjectCard = styled(Link)`
  /* background: #242424; */
  background: transparent;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  /* justify-content: center;
  align-items: center; */

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const ProjectCardIcon = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10;
`;

export const ProjectCardInfo = styled.div`
  margin-bottom: 5px;
  font-size: 24px;
  /* margin-bottom: auto; */
  /* justify-content: center;
  align-items: center; */
`;

export const ProjectCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ProjectCardCost = styled.h4`
  font-size: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ProjectCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* margin: 16px 0 32px; */
`;

export const ProjectCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ProjectCardFeature = styled.li`
  margin-bottom: 10px;
`;
