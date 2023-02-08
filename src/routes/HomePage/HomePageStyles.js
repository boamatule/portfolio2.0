import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';

export const  HomePageWrapper = styled(Container)`
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  margin-top: 120px;
  /* position: absolute; */

  @media (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
  }
`;