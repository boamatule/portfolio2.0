import React, { useContext, useState } from "react";
import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

import { ProjectsContext, ProjectsProvider } from './contexts/projects.context';

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled(LazyLoadImage)`
  display: block;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
`;

const OptimizedBlurhasImage = () => {
  const { projects } = useContext(ProjectsContext);
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);
  const [loadState, setLoadState] = useState({ isLoaded: false, isLoadStarted: false });

  const handleLoad = () => {
    setLoadState({ ...loadState, isLoaded: true });
  };
  
  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadState({ ...loadState, isLoadStarted: true });
  };
  
  return (
    <ProjectsProvider>
      {projects.map((project) => (
        <ImageWrapper 
        key={project.id}>
          <Image
            src={project.imageUrl} // Use the image name from the JSON file to dynamically generate the URL
            alt={project.alt}
            onLoad={handleLoad}
            beforeLoad={handleLoadStarted}
          />
          {!isLoaded && isLoadStarted && (
            <StyledBlurhash
              hash="project.blurhashLEHV6nWB2yk8pyo0adR*.7kCMdnj"
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </ImageWrapper>
      ))}
    </ProjectsProvider>
  );
};

export default OptimizedBlurhasImage;