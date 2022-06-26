import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../components/Pricing';
import Menuetailwind from '../../components/MenueTailwind';
function Solutions() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      
    </>
  );
}

export default Solutions;
