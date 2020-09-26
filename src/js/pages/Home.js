import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import ResizableImage from '../resizable-image/components/ResizableImage';
import { COOL_PIC_ONE } from '../constants/pictures';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const [pastDelay, setPastDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPastDelay(true);
    }, 3000);
  }, []);

  return (
    <Container>
      {pastDelay ? (
        <ResizableImage image={COOL_PIC_ONE} />
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Home;
