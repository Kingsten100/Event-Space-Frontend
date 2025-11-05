import { FaWifi } from "react-icons/fa";
import { BsFillProjectorFill } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaParking } from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { MdLocalBar } from "react-icons/md";
import { PiFlowerTulipBold } from "react-icons/pi";
import { MdRestaurant } from "react-icons/md";
import { FaChalkboard } from "react-icons/fa";
import { PiVideoConference } from "react-icons/pi";
import { PiChairBold } from "react-icons/pi";

export const amenityIcons: Record<string, React.ReactNode> = {
  'Wifi': <FaWifi size={20}/>,
  'Projector': <BsFillProjectorFill size={20}/>,
  'Kitchen': <FaKitchenSet size={20}/>,
  'Sound System': <BsFillSpeakerFill size={20}/>,
  'Parking': <FaParking size={20}/>,
  'Stage': <GiTheaterCurtains size={20}/>,
  'Lighting Equipment': <FaLightbulb size={20}/>,
  'Elevator': <GiElevator size={20}/>,
  'Chairs': <PiChairBold size={20}/>,
  'Air Conditioning': <TbAirConditioning size={20}/>,
  'Bar': <MdLocalBar size={20}/>,
  'Garden Access': <PiFlowerTulipBold size={20}/>,
  'Catering': <MdRestaurant size={20}/>,
  'Whiteboard': <FaChalkboard size={20}/>,
  'Video Conferencing': <PiVideoConference size={20}/>

}