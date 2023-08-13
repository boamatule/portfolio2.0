import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../global-styles';
import { ErrorContainer, TextRaw } from './NotFound.Style';

const NotFound = () => {
  const navigate = useNavigate();

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
      <ErrorContainer>
        <TextRaw>
          Holy! It looks like the page you are looking for has been lost.
        </TextRaw>
        <Button
          style={{
            color: '#999999',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '0px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Roboto Mono, monospace',
            marginTop: '16px',
          }}
          onClick={() => navigate('/')}
          aria-label='Take me back to the homepage'
          title='Take me back to the homepage'
        >
          Take me back to the homepage
        </Button>
      </ErrorContainer>
    </div>
  );
}


export default React.memo(NotFound);