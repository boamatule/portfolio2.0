/* eslint-disable react/prop-types */
import styled from 'styled-components/macro';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};

  &:focus {
    outline: none;
  }
  transition: all 0.5s ease; ;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

function DarkLightMode(props) {
  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
  }

  // eslint-disable-next-line react/destructuring-assignment
  const icon = props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Container>
    </Page>
  );
}

export default DarkLightMode;
