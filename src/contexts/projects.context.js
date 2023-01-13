/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { createContext, useState, useMemo } from 'react';

import PROJECTS from '../Pages/PortfolioPage/portfolio-content';

export const ProjectsContext = createContext({
  projects: [],
});

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(PROJECTS);
  const value = { projects };
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

// import PROJECTS from '../Pages/PortfolioPage/portfolio-content';

// export function ProjectsProvider({ children }) {
//   const [projects, setProjects] = useState(PROJECTS);

//   // Use useMemo to only update the filteredProjects state when
//   // the searchText or projects state changes
//   const [searchText, setSearchText] = useState('');
//   const filteredProjects = useMemo(
//     () => projects.filter((project) => project.name.includes(searchText)),
//     [searchText, projects],
//   );

//   const value = { projects: filteredProjects, setSearchText };
//   return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
// }
