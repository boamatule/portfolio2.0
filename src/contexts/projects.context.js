import React, { createContext, useState } from 'react';

import PROJECTS from '../Pages/PortfolioPage/portfolio-content';

export const ProjectsContext = createContext({
  projects: [],
});

export function CompaniesProvider({ children }) {
  const [projects, setProjects] = useState(PROJECTS);
  const value = { projects };
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
