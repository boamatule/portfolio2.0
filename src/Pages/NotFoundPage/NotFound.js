import React, { lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../global-styles';
import { ErrorContainer, TextRaw } from './NotFound.Style';
const NavBar = lazy(() => import('../../routes/Navigation/Navigation'));
const Footer = lazy(() => import('../../components/Footer/Footer'));

const NotFound = () => {
  const navigate = useNavigate();
  const [show404Page] = useState(true); // Set this state variable based on your logic

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     navigate('/');
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [navigate]);


  return (
    <div>
      {/* Apply CSS to hide other components when show404Page is true */}
      <div style={{ display: show404Page ? 'none' : 'block' }}>
        {/* Place other components that you want to hide here */}
        <NavBar />
        <Footer />
      </div>
      <ErrorContainer>
        <TextRaw>
          Holy! It looks like the page you are looking for has been lost.
        </TextRaw>
        <>
          <Button
            style={{
              // background: '#007bff',
              color: '#999999',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '0px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              // transition: 'background-color 0.3s ease',
            }}
            onClick={() => navigate('/')}
            aria-label='Take me back to the homepage'
            title='Take me back to the homepage'
            >
            Take me back to the homepage
          </Button>
        </>
      </ErrorContainer>
    </div>
  );
}


export default React.memo(NotFound);