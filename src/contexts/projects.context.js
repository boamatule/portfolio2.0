import { createContext, useState, useMemo } from 'react';

import PROJECTS from '../Pages/PortfolioPage/portfolio-content.js';

export const ProjectsContext = createContext({
  projects: [],
});

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(PROJECTS);

  const value = useMemo(() => {
    projects(projects);
  }, [projects]);

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
