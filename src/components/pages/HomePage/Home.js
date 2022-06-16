import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import SliderComponent from '../../SliderComponent';
import MediaCard from '../../MediaCard';

function Home() {
  return (
    <>
      <SliderComponent />
      <MediaCard />
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
