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
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Skill = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #0077b6;
  margin: 0.5rem;
`;

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Subtitle>My name is Muhammad Bilal and I'm a Front-end Developer.</Subtitle>
      <Paragraph>I have experience working with:</Paragraph>
      <SkillsContainer>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>Git</Skill>
      </SkillsContainer>
    </Container>
  );
};

export default About;
