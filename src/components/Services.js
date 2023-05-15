import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  height:80vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height:70vh;
  ${'' /* background-color:red; */}
  
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height:60vh;
  padding: 2rem;
  margin: 1rem;
  ${'' /* background-color: #f2f2f2; */}
  ${'' /* background: linear-gradient(135deg, #ebadb6 0%, #aceae1 100%); */}
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
  border-radius: 5px;
  box-shadow: 20px 20px 60px , -20px -20px 60px #ffffff;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem 0;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <Subtitle>Here's what I can do for you</Subtitle>
      <ServicesContainer>
        <ServiceCard>
          <ServiceTitle>Web Design</ServiceTitle>
          <ServiceDescription>
            I can create beautiful and responsive web designs that will make your website stand out.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            I can develop high-quality and scalable web applications using the latest web technologies.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Front-end Development</ServiceTitle>
          <ServiceDescription>
            I can develop the user interface of your web application using HTML, CSS, and JavaScript frameworks.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
