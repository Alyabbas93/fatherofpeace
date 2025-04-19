import { ChevronRight, Play, PlayIcon, Users } from "lucide-react";
import { useState, useEffect } from "react";

const videos = [
  {
    title: "Video of the Day",
    subtitle: "Building a World of Peace",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "March 7, 2025",
    event: "World Summit on Peace",
  },
];

export default function VideoCard() {
  const [video, setVideo] = useState(videos[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="bg-[#ffffff] p-4 rounded-lg   w-full">
    
      <div className="flex items-center space-x-2 mb-1">
        <Play size={25} strokeWidth={1.25} className=" text-[#28303F]" />
        <h2 className="text-[28px] font-medium text-[#28303F]">{video.title}</h2>
      </div>
      <p className="text-[14px] pl-9 font-normal text-[#828282] mb-4">{video.subtitle}</p>

  
      <div className="bg-gray-200 h-88 w-full rounded-lg flex items-center justify-center">
        {loading ? (
          <div className="animate-spin h-8 w-8 border-4 border-gray-500 border-t-transparent rounded-full"></div>
        ) : (
          <video className=" h-full w-full rounded-lg" controls>
            <source src={video.videoUrl} type="video/mp4" className="object-cover" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

   
      <div className="flex justify-between items-center text-gray-500 text-[12px] mt-3 mb-4">
        <p className="text-[14px] text-[#828282] font-normal">{video.date}</p>
        <div className="flex items-center space-x-1">
          <Users className="h-4 w-4" />
          <p className="text-[14px] text-[#828282] font-normal">{video.event}</p>
        </div>
      </div>

   
      <button className="mt-3  cursor-pointer w-full flex items-center mb-4 justify-center gap-4 text-[12px] border border-[#28303F] rounded-md py-3 hover:bg-gray-100">
        <span className="mr-1 flex item-center"><ChevronRight size={24} strokeWidth={1.25} /></span> 
        <span className="text-[14px] font-normal">View More Videos</span>
      </button>
    </div>
  );
}
