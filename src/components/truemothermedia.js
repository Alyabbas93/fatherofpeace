import {CircleAlert} from "lucide-react"
import Image from "next/image";
import { Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { BookmarkMinus } from "lucide-react";
import { BookImage } from "lucide-react";
import { Button } from "./ui/button";

const cardData =[
    {
        quote:"The family is the school of love where we learn to love all humanity in its wide variety.",
        date:"2015-05-03",
        text:"International Day of Families Celebration"
    },
    {
        quote:"When we understand that God is our parent, we realize that all people are brothers and sisters. This understanding is the foundation for building a world of peace.",
        date:"2018-02-16",
        text:"International Day of Families Celebration"
    },
    {
        quote:"The family is the school of love where we learn to love all humanity in its wide variety.",
        date:"2015-05-03",
        text:"International Day of Families Celebration"
    },
]
export default function FamilyValues() {

  return (
    <div className="space-y-4 bg-[#ffffff] p-4  rounded-lg ">
        {cardData.map((item, index) => (
         <div key={index} className=" rounded-[15px] p-4 bg-[#D9D9D91A] space-y-6">
            <div className="flex justify-between items-center">
                <span className="text-[#28303F] text-sm">{item.date}  </span>
                <CircleAlert size={20} strokeWidth={1.25} />
            </div>
            <div className="flex pr-10">
              <span className="text-xl text-[#28303F] font-semibold">“</span>
              <h2 className="text-xl text-[#28303F]  font-semibold pl-1">
                {item.quote}”
              </h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-end">
                 <Share2 size={24} strokeWidth={1.25} />
                 <Button variant="outline"><BookImage size={20}  />Create Image</Button>
                 <Button variant="outline"><Image/>Create Discussion </Button>
                 <Button variant="outline"> <Heart size={20} />Send a blessing</Button>
                 <BookmarkMinus size={24}strokeWidth={1.25}   />
            </div>
         </div>
      ))}
    </div>
  );
}