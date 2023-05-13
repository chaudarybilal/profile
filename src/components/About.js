import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(45deg, #FF6B6B, #3E8DE6);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #fff;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.li`
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  font-size: 14px;
`;

const About = () => {
  return (
    <CardContainer>
      <TextContainer>
        <Title>About Me</Title>
        <Paragraph>
        As a fresh Front End Developer, I am passionate about creating stunning and user-friendly web experiences. With a solid foundation in HTML, CSS, and JavaScript, I am eager to contribute my skills and knowledge to a dynamic and collaborative team. My strong attention to detail and creative problem-solving abilities make me a valuable asset to any project. I am excited to embark on a fulfilling career in web development and continue to grow my expertise.  
         </Paragraph>
      </TextContainer>
      <SkillList>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Responsive Design</Skill>
        <Skill>UI/UX Design</Skill>
      </SkillList>
    </CardContainer>
  );
};

export default About;
