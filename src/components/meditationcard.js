
import { useState, useEffect } from "react";
import {  Play, Pause,  Clock1, CalendarDays, CalendarRange } from "lucide-react";

export default function MeditationCard() {
   const [isPlaying, setIsPlaying] = useState(false);
   const [progress, setProgress] = useState(0);
   const totalDuration = 600;
 
   const togglePlay = () => {
     setIsPlaying((prev) => !prev);
     if (!isPlaying) {
       const start = Date.now() - progress * 1000;
       const interval = setInterval(() => {
         const elapsed = Math.floor((Date.now() - start) / 1000);
         if (elapsed >= totalDuration) {
           setProgress(totalDuration);
           setIsPlaying(false);
           clearInterval(interval);
         } else {
           setProgress(elapsed);
         }
       }, 1000);
       return () => clearInterval(interval);
     }
   };
 
   const formatTime = (time = 0) => {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    
    
 
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg  w-full">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
        <CalendarRange size={28} strokeWidth={0.85} />
         
          <h2 className="text-[28px] font-medium text-[#28303F]">Meditation of the Day</h2>
          
        </div>
        <p className="text-[12px] text-gray-500">March 7, 2025</p>
      </div>
      <p className="text-[16px] text-[#828282] font-normal mb-4 px-9">Peace Begins Within</p>
     <span className="text-[14px] font-normal text-[#828282]">A guided meditation focusing on inner peace and harmony, featuring teachings from Dr. Hak Ja Han Moon.</span>

      <div className="mt-4 bg-[#D9D9D91A] p-3 rounded-lg">
        <div className="flex justify-between items-center text-[12px] text-gray-500 mb-1">
          <div className="flex items-center space-x-1">
            <Clock1 className="h-4 w-4 text-gray-600" />
            <p className="text-[14px] font-normal text-[#28303F]">10:00</p>
          </div>
          <p className="text-[14px] font-normal text-[#28303F]">Peace</p>
        </div>

        <div className="relative w-full bg-gray-200 h-2.5 rounded-full">
          <div
            className="absolute left-0 bg-[#5E8DE5] h-2.5 rounded-full transition-all duration-1000"
            style={{ width: `${(progress / totalDuration) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-[14px] text-[#828282] mt-1">
          <p>{formatTime(progress)}</p>
          <p>{formatTime(totalDuration)}</p>
        </div>
      </div>

      <button
        className="mt-4 cursor-pointer bg-[#5E8DE5] w-full text-white py-2.5 rounded-md flex items-center justify-center space-x-2"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
        <span className="text-[14px] font-normal pl-2">{isPlaying ? "Pause Meditation" : "Start Meditation"}</span>
      </button>
    </div>
  );
}
