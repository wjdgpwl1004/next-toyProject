import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 21px;
  color: red;
`;

const Index: NextPage = () => {

  return (
      <>
        <Container>hello</Container>
      </>
  );
};

export default Index;
