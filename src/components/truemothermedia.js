import { CircleAlert, Users, Users2 } from "lucide-react";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { BookmarkMinus } from "lucide-react";
import { BookImage } from "lucide-react";
import { Button } from "./ui/button";

const cardData = [
  {
    quote:
      "The family is the school of love where we learn to love all humanity in its wide variety.",
    date: "2015-05-03",
    text: "International Day of Families Celebration",
  },
  {
    quote:
      "When we understand that God is our parent, we realize that all people are brothers and sisters. This understanding is the foundation for building a world of peace.",
    date: "2018-02-16",
    text: "International Day of Families Celebration",
  },
  {
    quote:
      "True love is unconditional. It seeks to give first, rather than demand from others. This is the essence of a harmonious family.",
    date: "2017-09-12",
    text: "International Day of Families Celebration",
  },
  {
    quote:
      "A peaceful world begins with peaceful families. When we cultivate love in our homes, we shape the future of humanity.",
    date: "2020-06-24",
    text: "International Day of Families Celebration",
  },
];

export default function FamilyValues() {
  return (
    <div className="space-y-4 bg-[#ffffff] p-4 rounded-lg">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="rounded-[15px] p-4 bg-[#D9D9D91A] space-y-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-[#28303F] text-[14px]">{item.date}</span>
            <CircleAlert size={20} className="text-[#28303F]" strokeWidth={1.25} />
          </div>
          <div className="flex pr-10">
            <span className="text-xl text-[#28303F] font-semibold">“</span>
            <h2 className="text-[20px] text-[#28303F] font-semibold pl-1">
              {item.quote}”
            </h2>
          </div>

          <p className="text-[14px] pl-[17px] text-[#828282]">{item.text}</p>

          <div className="flex items-center pt-6 gap-4 flex-wrap justify-end rounded-md p-4">
            <Share2 size={24} strokeWidth={1.25} className="text-[#28303F]" />
            <Button
              variant="outline"
              className="border border-[#28303F] text-[#28303F] flex items-center gap-2"
            >
              <BookImage size={20} className="text-[#28303F]" /> Create Image
            </Button>
            <Button
              variant="outline"
              className="border border-[#28303F] text-[#28303F] flex items-center gap-2"
            >
             <Users2 size={20}  className="text-[#28303F]" /> Create Discussion
            </Button>
            <Button
              variant="outline"
              className="border border-[#28303F] text-[#28303F] flex items-center gap-2"
            >
              <Heart size={20} className="text-[#28303F]" /> Send a blessing
            </Button>
            <BookmarkMinus size={24} strokeWidth={1.25} className="text-[#28303F]" />
          </div>
        </div>
      ))}
    </div>
  );
}
