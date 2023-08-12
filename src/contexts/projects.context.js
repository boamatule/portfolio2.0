import React, { createContext, useState } from 'react';

import PROJECTS from '../portfolio-content.json';

export const ProjectsContext = createContext({
  projects: [],
});

export function ProjectsProvider({ children }) {
  const [projects] = useState(PROJECTS);
  const value = { projects };
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
