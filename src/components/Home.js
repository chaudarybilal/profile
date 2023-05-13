import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: #0077b6;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>My name is Muhammad Bilal and I'm a Front -end Developer.</Subtitle>
      <Button>View My Work</Button>
    </Container>
  );
};

export default Home;
