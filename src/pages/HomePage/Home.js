import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../components/Pricing';
import SliderComponent from '../../components/SliderComponent';
import Card from '../../components/Card';

function Home() {
  return (
    <>
      <SliderComponent />
      <Card />
      <Pricing />
      {/* <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      <Pricing /> */}
    </>
  );
}

export default Home;
