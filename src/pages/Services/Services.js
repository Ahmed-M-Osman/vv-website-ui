import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../components/Pricing';

function Services() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
