import { Cog , Box , CircleStar , Settings , MonitorCloud , InspectionPanel} from 'lucide-react';

const servicesData = [
  {
    title: "CNC Turning",
    description:
      "High precision turned components with tight tolerances.",
      icon : <Cog className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "VMC Machining",
    description:
      "Complex parts with high accuracy using VMC machines.",
       icon : <Box className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Mold & Die Manufacturing",
    description:
      "Precision molds and dies for plastic & metal forming.",
       icon : <CircleStar className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Precision Components",
    description:
      "High-quality precision components for critical applications.",
      icon : <Settings className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Custom sheet metal parts with superior finishing.",
      icon : <InspectionPanel className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "CAD / CAM Design",
    description:
      "Designing & simulation for better productivity & accuracy.",
       icon : <MonitorCloud className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
];

export default servicesData;