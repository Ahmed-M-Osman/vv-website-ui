import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import SliderComponent from '../../SliderComponent';
import MediaCard from '../../MediaCard';
import Card from '../../Card';

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
