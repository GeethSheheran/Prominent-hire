// src/pages/Services/Career/CareersPage.js
import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import IndustryPage from './IndustryPage';
import Service from '../../Home/Service';
import Footer from '../../Home/Footer';

const Support = () => {
  return (
    <PageContainer>
      <Hero />
      <IndustryPage />
      <Service />
      <Footer />
    </PageContainer>
  );
};

export default Support;

const PageContainer = styled.div`
  text-align: center;
`;
