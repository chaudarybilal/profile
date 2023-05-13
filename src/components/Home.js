import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:rgb(64, 104, 130);
  
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
      <Subtitle>Bringing digital designs to life with creativity and code - the Front End Developer</Subtitle>
      <NavLink to="/about">  <Button>View My Work</Button></NavLink>
    
      
    </Container>
  );
};

export default Home;
