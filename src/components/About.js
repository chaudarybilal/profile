import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  height:60vh;
`;

const Card = styled.div`
  background-color:#e8e8e8;
  color: black;
  padding: 20px;
  margin-bottom: 20px;
  flex-basis: 100%;
  animation: ${fadeIn} 1s ease-in;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 10px);
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
`;

const About = () => {
  return (
    <CardContainer>
      <Card>
        <Title>Introduction</Title>
        <Description>
        A dynamic front-end developer with a background in electrical engineering and a deep passion for web development. Combining my technical expertise and creativity, I have successfully transitioned into the world of coding to craft captivating portfolio websites. Through dedicated learning and hands-on experience, I have honed my skills in HTML, CSS, JavaScript, and various frameworks. With a problem-solving mindset and meticulous attention to detail, I strive to deliver visually stunning and user-friendly web experiences. I am excited to contribute my unique blend of engineering and web development skills to create innovative digital solutions
      
        </Description>
      </Card>
      <Card>
        <Title>Skills</Title>
        <SkillsList>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Styled Components</SkillItem>
        </SkillsList>
      </Card>
    </CardContainer>
  );
};

export default About;
