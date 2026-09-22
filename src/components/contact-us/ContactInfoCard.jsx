import { Phone } from "lucide-react";

const ContactInfoCard = ({ Icon, title, details }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0878DC]">
        <Icon size={26} strokeWidth={2} />
      </div>

      <div>
        <h3 className="font-inter text-base font-semibold text-[#071B37]">
          {title}
        </h3>

        <div className="mt-1 space-y-0.5">
          {details.map((detail, index) => (
            <p
              key={index}
              className="font-inter text-sm leading-5 text-[#657084]"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard ;