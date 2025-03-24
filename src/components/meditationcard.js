
import { useState, useEffect } from "react";
import {  Play, Pause,  Clock1, CalendarDays } from "lucide-react";

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
    <div className="bg-[#ffffff] p-4 rounded-lg border w-full">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-6 w-6 text-gray-600" />
         
          <h2 className="text-[16px] font-semibold text-[#1D1D1D]">Meditation of the Day</h2>
          
        </div>
        <p className="text-[12px] text-gray-500">March 7, 2025</p>
      </div>
      <p className="text-[12px] text-gray-500 mb-4 px-8">Peace Begins Within</p>
     

      <div className="mt-4 bg-[#D9D9D91A] p-3 rounded-lg">
        <div className="flex justify-between items-center text-[12px] text-gray-500 mb-1">
          <div className="flex items-center space-x-1">
            <Clock1 className="h-4 w-4 text-gray-600" />
            <p className="text-[12px] font-semibold text-[#1D1D1D]">10:00</p>
          </div>
          <p className="text-[12px] text-gray-500 font-medium">Peace</p>
        </div>

        <div className="relative w-full bg-gray-200 h-2 rounded-full">
          <div
            className="absolute left-0 bg-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(progress / totalDuration) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-[12px] text-gray-500 mt-1">
          <p>{formatTime(progress)}</p>
          <p>{formatTime(totalDuration)}</p>
        </div>
      </div>

      <button
        className="mt-4 bg-[#4F81F7] w-full text-white py-2 rounded-md flex items-center justify-center space-x-2"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
        <span className="text-[14px] font-medium">{isPlaying ? "Pause Meditation" : "Start Meditation"}</span>
      </button>
    </div>
  );
}
