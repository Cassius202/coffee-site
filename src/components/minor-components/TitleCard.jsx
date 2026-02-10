import { MapPin } from "lucide-react";
import { FaLocationPin } from "react-icons/fa6";

function TitleCard ( {title, subtitle} ) {
  return <div className='flex flex-col gap-y-2.5 items-center'>
    <h2 className="title font-fair">
      {title}
    </h2>
    <p className="title-string">
      {subtitle}
    </p>
  </div>
};

export default TitleCard;