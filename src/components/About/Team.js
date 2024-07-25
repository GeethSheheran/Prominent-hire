import React from 'react';
import styled from 'styled-components';

const Team = () => {
  const teamMembers = [
    {
      role: 'Founder',
      name: 'John Alexander',
      image: '/001.png'
    },
    {
      role: 'Co-Founder',
      name: 'Scotte Macleran',
      image: '/002.png'
    },
    {
      role: 'Secretary',
      name: 'Mila Romena',
      image: '/003.png'
    }
  ];

  return (
    <TeamContainer>
      <Header>Our Team</Header>
      <SubHeader>Meet the passionate professionals behind us who are committed to your success.</SubHeader>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <Avatar src={member.image} alt={member.name} />
            <Role>{member.role}</Role>
            <Name>{member.name}</Name>
          </Card>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;

const TeamContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 1rem;
  color: #777;
`;
