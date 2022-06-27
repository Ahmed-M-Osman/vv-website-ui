import HeroSection from "../../components/HeroSection"
import { homeObjTwo } from "../Contact/Data"

const Services = () => {
  return (
    <div>
        <HeroSection { ...homeObjTwo} />
        <HeroSection  { ...homeObjTwo} />
        <HeroSection id={'orgasoul'} { ...homeObjTwo} />
        <HeroSection { ...homeObjTwo} />
        <HeroSection { ...homeObjTwo} />
    </div>
  )
}

export default Services