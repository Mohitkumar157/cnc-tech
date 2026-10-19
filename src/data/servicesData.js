import { Cog , Box , CircleStar , Settings , MonitorCloud , InspectionPanel} from 'lucide-react';

const servicesData = [
  {
    title: "Gear & Pinion Manufacturing",
    description:
      "Precision gears and pinions for mechanical and power-transmission applications.",
    icon: <Cog className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "CNC Precision Manufacturing",
    description:
      "CNC-machined and turned components according to customer specifications.",
    icon: <Box className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Brass Component Manufacturing",
    description:
      "Precision Brass components for industrial and engineering requirements.",
    icon: <CircleStar className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Gunmetal Component Manufacturing",
    description:
      "Gunmetal components manufactured according to customer requirements.",
    icon: <Settings className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Aluminium Component Manufacturing",
    description:
      "Aluminium components produced according to drawings and specifications.",
    icon: <InspectionPanel className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
  {
    title: "Metal Moulding",
    description:
      "Manufacturing and moulding solutions for required metal components.",
    icon: <MonitorCloud className='w-12 h-12 text-[#0778db]' strokeWidth={1.4}/>
  },
];

export default servicesData;