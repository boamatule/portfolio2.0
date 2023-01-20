import React, { createContext, useState, useMemo } from 'react';

import PROJECTS from '../portfolio-content.json';

export const ProjectsContext = createContext({
  projects: [],
});

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(PROJECTS);
  const value = { projects };
  // const value = useMemo(() => projects, [projects]);
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
