import { Play, PlayIcon, Users } from "lucide-react";
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
    <div className="bg-[#ffffff] p-4 rounded-lg border w-full">
    
      <div className="flex items-center space-x-2 mb-2">
        <Play className="h-5 w-5 text-gray-600" />
        <h2 className="text-[16px] font-semibold text-[#1D1D1D]">{video.title}</h2>
      </div>
      <p className="text-[12px] text-gray-500 mb-3">{video.subtitle}</p>

  
      <div className="bg-gray-200 h-88 w-full rounded-lg flex items-center justify-center">
        {loading ? (
          <div className="animate-spin h-8 w-8 border-4 border-gray-500 border-t-transparent rounded-full"></div>
        ) : (
          <video className=" h-full w-full rounded-lg" controls>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

   
      <div className="flex justify-between items-center text-gray-500 text-[12px] mt-3">
        <p>{video.date}</p>
        <div className="flex items-center space-x-1">
          <Users className="h-4 w-4" />
          <p>{video.event}</p>
        </div>
      </div>

   
      <button className="mt-3 w-full flex items-center justify-center text-[12px] border rounded-md py-2 hover:bg-gray-100">
        <span className="mr-1 flex item-center"><PlayIcon className="h-[18px]"/></span> View More Videos
      </button>
    </div>
  );
}
