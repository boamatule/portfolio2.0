/* eslint-disable react/function-component-definition */
import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { Container } from '../../global-styles';
import portfolioContent from './portfolio-content';

const PortfolioListPage = () => (
  <Container>
    <ProjectsList projects={portfolioContent} />
  </Container>
);

export default PortfolioListPage;

// {
//   id: 3,
//   "title": "Kind Like Netflix",
//   "stack":
//     "Nextjs ☆ Serveless ☆ Framer ☆ GraphQL ☆ Redis ☆ Hasura ☆ Vercel ☆ Serveless ☆ Magic ☆ ISG ☆ JWT ☆ Framer ☆ React Hooks",
//   "imageUrl": "../../images/netflix.webp",
//   "alt": "Netflix",
//   "description": "Blog built in ReactJs and Backended using MongoDB",
//   "sourceCodeUrl": "https://github.com/boamatule/discover_videos_nextjs",
//   "deployedUrl": "https://discover-videos-nextjs.vercel.app/"
//   // title: 'NASA Mission Control',
//   // imageUrl: '../../images/space.webp',
//   // alt: 'Space',
//   // stack: 'Reactjs ☆ Nodejs ☆ NASA ☆ SpaceX ☆ RESTful API ☆ Express ☆ Mongoose ☆ Docker ☆ Docker ☆  CI/CD ☆ JWT',
//   // description: 'Built in React and Acceptance testing using Cypress. Styled using Semantic UI for React',
//   // sourceCodeUrl: 'https://github.com/boamatule/nasa_nodejs_project',
//   // deployedUrl: 'http://13.50.105.59:8000/',
// },
// {
//   id: 4,
//   "title": "Kind Like Netflix",
//   "stack":
//     "Nextjs ☆ Serveless ☆ Framer ☆ GraphQL ☆ Redis ☆ Hasura ☆ Vercel ☆ Serveless ☆ Magic ☆ ISG ☆ JWT ☆ Framer ☆ React Hooks",
//   "imageUrl": "../../images/netflix.webp",
//   "alt": "Netflix",
//   "description": "Blog built in ReactJs and Backended using MongoDB",
//   "sourceCodeUrl": "https://github.com/boamatule/discover_videos_nextjs",
//   "deployedUrl": "https://discover-videos-nextjs.vercel.app/"
//   // title: 'Meals To Go',
//   // stack: 'React Native ☆ Firebase ☆ Expo ☆ Places API',
//   // imageUrl: '../../images/mealstogo.webp',
//   // alt: 'Meals',
//   // description:
//   //   'A simple prototype of an Automatic Teller Machine (ATM) system with limited functionality built in Ruby program and RSpec',
//   // sourceCodeUrl: 'https://github.com/boamatule/MealsToGo',
//   // deployedUrl: 'https://github.com/boamatule/MealsToGo',
// },
// // {
// //   id: 5,
// //   title: 'Newsroom',
// //   stack: 'React ☆ Ruby on Rails ☆ Redis',
// //   imageUrl: '../../images/newsroom.webp',
// //   alt: 'Newsroom',
// //   description: 'Blog built in ReactJs and Backended using MongoDB',
// //   sourceCodeUrl: 'https://github.com/boamatule/Glocal_news-Client',
// //   deployedUrl: 'https://glocal-news.netlify.app/news',
// // },
// {
//   id: 6,
//   "title": "Kind Like Netflix",
//   "stack":
//     "Nextjs ☆ Serveless ☆ Framer ☆ GraphQL ☆ Redis ☆ Hasura ☆ Vercel ☆ Serveless ☆ Magic ☆ ISG ☆ JWT ☆ Framer ☆ React Hooks",
//   "imageUrl": "../../images/netflix.webp",
//   "alt": "Netflix",
//   "description": "Blog built in ReactJs and Backended using MongoDB",
//   "sourceCodeUrl": "https://github.com/boamatule/discover_videos_nextjs",
//   "deployedUrl": "https://discover-videos-nextjs.vercel.app/"
//   // title: 'Cat-BnB',
//   // stack: 'React.js ☆ Semantic UI ☆ Heroku ☆ Ruby on Rails ☆ Semaphore',
//   // imageUrl: '../../images/cat.webp',
//   // alt: 'Cat-BnB',
//   // description: 'An AirBNB for cats.',
//   // sourceCodeUrl: 'https://github.com/boamatule/cat-bnb',
//   // deployedUrl: 'https://kattbnb.herokuapp.com/',
// }
// ];
