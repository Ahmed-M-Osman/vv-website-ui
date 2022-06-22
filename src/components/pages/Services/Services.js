import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

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
